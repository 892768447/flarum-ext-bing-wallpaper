import SettingsModal from "flarum/components/SettingsModal";

export default class WallpaperSettingsModal extends SettingsModal {
    className() {
        return "Modal--small";
    }

    title() {
        return app.translator.trans("flarum-ext-bing-wallpaper.admin.settings.title");
    }

    form() {
        return [
            <div className="Form-group">
                <label>
                    {app.translator.trans("flarum-ext-bing-wallpaper.admin.settings.transparency_label")}
                </label>
                <input
                    required
                    className="FormControl"
                    bidi={this.setting("irony.bing.wallpaper.transparency")}
                />
            </div>
        ];
    }
}
