const { readdirSync } = require("node:fs")

function initializeV2(client) {
    const dir = readdirSync(`${__dirname}/functions`);
    for (const file of dir) {
        const func = require(`./functions/${file}`);
        client.functionManager.createFunction(
            func
        );
        console.log(`Loaded function: ${func.name}`);
    };
};

module.exports = { initializeV2 };