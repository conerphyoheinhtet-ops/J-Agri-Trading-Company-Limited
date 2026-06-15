tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "primary": "#002810",
                "on-primary": "#ffffff",
                "primary-container": "#004b23",
                "on-primary-container": "#bcefc3",
                "secondary": "#7b5800",
                "on-secondary": "#ffffff",
                "secondary-container": "#fecd72",
                "on-secondary-container": "#271900",
                "tertiary": "#444a19",
                "on-tertiary": "#ffffff",
                "surface": "#fafaf5",
                "on-surface": "#1a1c19",
                "surface-variant": "#e2e3de",
                "on-surface-variant": "#414941",
                "outline": "#707970",
                "background": "#fafaf5",
                "surface-container": "#eeeee9",
                "surface-container-low": "#f4f4ef",
                "secondary-fixed": "#ffdea6",
                "primary-fixed": "#bcefc3"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "unit": "4px",
                "margin-mobile": "24px",
                "margin-desktop": "80px",
                "gutter": "32px",
                "section-gap": "96px"
            },
            "fontFamily": {
                "display-hero": ["Newsreader"],
                "label-caps": ["Manrope"],
                "body-std": ["Manrope"],
                "headline-md": ["Newsreader"],
                "body-lead": ["Manrope"],
                "headline-lg-mobile": ["Newsreader"],
                "headline-lg": ["Newsreader"],
                "display-hero-mobile": ["Newsreader"]
            },
            "fontSize": {
                "display-hero": ["96px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "600"}],
                "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700"}],
                "body-std": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "500"}],
                "body-lead": ["20px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "headline-lg-mobile": ["36px", {"lineHeight": "1.2", "fontWeight": "500"}],
                "headline-lg": ["48px", {"lineHeight": "1.2", "fontWeight": "500"}],
                "display-hero-mobile": ["60px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600"}]
            }
        },
    },
}