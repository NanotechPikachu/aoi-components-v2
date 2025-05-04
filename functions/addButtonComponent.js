const { ButtonBuilder } = require("discord.js");

module.exports = {
    name: "$addButtonComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* label: string (optional), style: string, customId: string, disabled: boolean (optional), emoji: string (optional), url: string (optional) */
        let [label, style, customId, disabled = "false", emoji, url] = data.inside.splits;

        emoji = emoji ? emoji.addBrackets().trim() : undefined;

        switch (style.addBrackets().trim().toUpperCase()) {
            case "PRIMARY":
                style = 1;
                break;
            case "SECONDARY":
                style = 2;
                break;
            case "SUCCESS":
                style = 3;
                break;
            case "DANGER":
                style = 4;
                break;
            case "LINK":
                style = 5;
                break;
            default:
                return d.aoiError.fnError(d, "custom", {}, `Invalid button style: ${style}`);
        };
        disabled = disabled === "true" ? true : false;

        const button = new ButtonBuilder({
            custom_id: customId.addBrackets(),
            label: label?.addBrackets(),
            style: style,
            emoji: emoji
        });

        data.result = JSON.stringify(button.toJSON());
        
        return {
            code: d.util.setCode(data)
        };
    }
}