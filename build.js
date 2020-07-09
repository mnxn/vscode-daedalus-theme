const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const yamlString = fs.readFileSync(
	path.join(__dirname, "src", "daedalus-theme.yml"),
	"utf8"
);

fs.writeFileSync(
	path.join(__dirname, "theme", "daedalus-theme.json"),
	JSON.stringify(yaml.load(yamlString), null, 4)
);
