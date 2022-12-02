export const getThemeColor = (name: string, theme: any) => {
    console.log("name", name);
    console.log("theme", JSON.stringify(theme));
    return "#990011";
    return name.split('.').reduce((o, i) => o[i], theme.colors)
}
