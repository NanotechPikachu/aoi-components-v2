const { MediaGalleryItemBuilder } = require("discord.js");

module.exports = {
    name: "$addMediaItem",
    type: "djs",
    code: async d => {
        const data = d.util.aoiFunc(d);

        /* url: string, description: string (optional), alt: string (optional), spoiler: boolean (optional) */
        let [url, description, alt, spoiler = "false"] = data.inside.splits;
        spoiler = spoiler === "true" ? true : false;

        if (!url) return d.aoiError.fnError(d, "custom", {}, "URL is required for media item");

        const item = new MediaGalleryItemBuilder({
            description: description ?? undefined,
            alt: alt ?? undefined,
            media: {
                url: url,
            },
            spoiler: spoiler ?? false,
        });

        data.result = JSON.stringify(item.toJSON());
        return {
            code: d.util.setCode(data),
        };
    }
}