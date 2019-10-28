var fs = require("fs");
var parseString = require("xml2js").parseString;
var xml2js = require("xml2js");

module.exports = function (context) {
    return new Promise((resolve, reject) => {
        var rootPath = context.opts.projectRoot;
        var configXmlPath = path.join(rootPath, 'config.xml');
        var configXml = fs.readFileSync(configXmlPath, "utf-8");
        var pluginXml = fs.readFileSync('plugin.xml', "utf-8");

        // we then pass the data to our method here
        parseString(configXml, function (err, configXmlParsed) {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                // here we log the results of our xml string conversion
                console.log(configXmlParsed);
                console.dir(configXmlParsed.widget.$.id);

                parseString(pluginXml, function (err, pluginXmlParsed) {
                    if (err) {
                        console.log(err);
                        reject(err)
                    } else {
                        // create a new builder object and then convert
                        // our json back to xml.
                        var androidPlatform = pluginXmlParsed.plugin.platform.find(function (p) { return p.$.name == "android"; })
                        var cf = androidPlatform["config-file"].find(function (cf) { return cf.provider && cf.provider.length > 0; });
                        var p = cf.provider.find(function (p) { return p.$["android:name"] && p.$["android:name"] == "com.ezetap.sdk.EzetapFileProvider" })
                        p.$["android:authorities"] = configXmlParsed.widget.$.id + ".EzetapFileProvider";
                        var builder = new xml2js.Builder();
                        var xml = builder.buildObject(pluginXmlParsed);
                        fs.writeFile(pluginXml, xml, function (err, data) {
                            if (err) {
                                console.log(err);
                                reject(err)
                            } else {
                                console.log("successfully written our update xml to file");
                                resolve('done');
                            }
                        });
                    }
                });
            }
        });
    });
};