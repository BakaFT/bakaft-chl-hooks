export default [
    {
        matcher: 'champion-bench',
        mixin: (Ember, args) => ({}),
        wraps: [
            {
                name: "runTask",
                replacement: function (original, args) {
                    args[1] = 0
                    return original(...args)
                }
            }
        ]
    },
    {
        matcher: 'champion-bench-item',
        mixin: (Ember, args) => ({}),
        wraps: [
            {
                name: "runTask",
                replacement: function (original, args) {
                    args[1] = 0
                    return original(...args)
                }
            }
        ]
    }

];