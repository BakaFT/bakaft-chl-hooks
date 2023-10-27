const NAVBAR_TEXTONLY = [
    {
        // 关闭导航栏文字
        matcher: 'main-navigation-menu-item',
        mixin: (Ember, args) => ({
            shouldDisplayTextBelowIcons: false,
        })
    }
]

export default [
    ...NAVBAR_TEXTONLY
]
