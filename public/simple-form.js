export class SimpleForm {
    document;
    constructor(document) {
        this.document = document;
    }
    createFieldset(name, obj) {
        const fieldset = this.document.createElement("fieldset");
        const form = this.createForm(obj);
        fieldset.appendChild(form);
        fieldset.appendChild(this.createLegend(name, form));
        return fieldset;
    }
    createForm(obj) {
        const form = this.document.createElement("form");
        for (const prop in obj) {
            form.appendChild(this.createInputContainer(prop, obj));
        }
        form.style.display = "none";
        return form;
    }
    createLegend(name, form) {
        let legend = this.document.createElement("legend");
        legend.innerText = name;
        legend.addEventListener("click", function () {
            form.style.display =
                form.style.display !== "none" ? "none" : "inline-block";
        });
        return legend;
    }
    createInputContainer(prop, obj) {
        let container = this.document.createElement("div");
        //@ts-ignore
        if (typeof obj[prop] === "object") {
            //@ts-ignore
            container.appendChild(this.createFieldset(prop, obj[prop]));
        }
        else {
            container.appendChild(this.createLabel(prop));
            container.appendChild(this.createInput(prop, obj));
        }
        return container;
    }
    createLabel(prop) {
        let label = this.document.createElement("label");
        label.setAttribute("for", prop);
        label.innerText = prop;
        return label;
    }
    createInput(prop, obj) {
        let input = this.document.createElement("input");
        input.name = prop;
        //TODO
        // @ts-ignore
        input.value = obj[prop];
        input.onchange = function (evt) {
            // @ts-ignore
            obj[prop] = evt.srcElement.value;
        };
        return input;
    }
}
