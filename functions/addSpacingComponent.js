const { ComponentType } = require("discord-api-types/v10");

module.exports = {
    name: "$addSpacingComponent",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* spacing: number (1 | 2), divider: boolean id: number (optional) */
        let [spacing = 1, divider = "true", id] = data.inside.splits;
        id = parseInt(id) || undefined;
        spacing = parseInt(spacing);
        divider = divider === "true" ? true : false;

        if (spacing < 1 || spacing > 2) return d.aoiError.fnError(d, "custom", {}, "Spacing must be 1 or 2");

        res = { id: id, type: ComponentType.Separator, spacing: spacing ?? 1, divider: divider };
        data.result = JSON.stringify(res);
        return {
            code: d.util.setCode(data),
        };
    }
}