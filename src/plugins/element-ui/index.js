import ElementUi from "element-ui"

export function loadElementPlus(app, options = {}) {
    app.use(ElementUi, options);
}
