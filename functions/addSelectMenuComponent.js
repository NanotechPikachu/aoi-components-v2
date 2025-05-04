const { StringSelectMenuBuilder, UserSelectMenuBuilder, RoleSelectMenuBuilder, MentionableSelectMenuBuilder, ChannelSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "$addSelectMenuComponent",
    type: "djs",
    code: async d => {

        const data = d.util.aoiFunc(d);

        let [type, customId, placeholder, minValues = 1, maxValues = 1, disabled = "false", ...values] = data.inside.splits;

        minValues = parseInt(minValues);
        maxValues = parseInt(maxValues);
        disabled = disabled === "true" ? true : false;
        type = type?.addBrackets()?.trim()?.toLowerCase();
        let select

        switch (type) {
            case "string":
                select = new StringSelectMenuBuilder();
                break;
            case "user":
                select = new UserSelectMenuBuilder();
                break;
            case "role":
                select = new RoleSelectMenuBuilder();
                break;
            case "mentionable":
                select = new MentionableSelectMenuBuilder();
                break;
            case "channel":
                select = new ChannelSelectMenuBuilder();
                break;
            default:
                return d.aoiError.fnError(d, "custom", {}, "Invalid SelectMenu Type");
        };

        select.setCustomId(customId?.addBrackets()).setPlaceholder(placeholder?.addBrackets()).setMaxValues(maxValues).setMinValues(minValues).setDisabled(disabled);

        if (type === "channel" && values?.length !== 0) {
            values?.forEach(v => select.addChannelTypes(d.util.channelTypes[v]))
        };

        let emoji, label, description, value, def;

        for (let option of values) {
            if (type !== "channel") {
                option = option?.split(":");
                label = option[0].addBrackets();
                description = option[1].addBrackets();
                value = option[2].addBrackets();
                def = option[3].addBrackets() === "true";

                if (option?.length > 4) {
                    const e = option?.slice(4)?.join(":");
                    emoji = await d.util.getEmoji(d, e);
                    if (!emoji) emoji = e;
                    else emoji = { name: emoji.name, id: emoji.id, animated: emoji.animated };

                };
            };

            switch (type) {
                case "string":
                    select.addOptions({
                        label, 
                        description, 
                        value, 
                        default: def, 
                        emoji
                    });
                    break;
                case "user":
                case "role":
                case "mentionable":
                case "channel":
                    break;
            };
        };

        data.result = JSON.stringify(select.toJSON());

        return {
            code: d.util.setCode(data)
        };
    }
}