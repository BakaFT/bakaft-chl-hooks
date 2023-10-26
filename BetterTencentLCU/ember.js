const NAVBAR = [
    {
        // 关闭导航栏文字
        matcher: 'main-navigation-menu-item',
        mixin: (Ember, args) => ({
            shouldDisplayTextBelowIcons: false,
        })
    },
    {
        // 关闭点券充值按钮
        matcher: "currency-container-stacked",
        mixin: () => ({
            isRPTopUpEnabled: false,
            didRender() {
                this.set("isRPTopUpEnabled", false);
            }
        })
    }
]

export default [
    ...NAVBAR
]
