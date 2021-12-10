const Component = {
    template: `<div>
                <h1>БУДАГОЩЬ</h1>
                <button @click="value++">+</button>
                {{value}}
                <button @click="value--">-</button>
            </div>`,
    data: function () {
        return {
            value: 0
        }
    }
};