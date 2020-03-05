export default {
    toSizeString(size) {
        return typeof size === "number" ? `${size}px` : size
    }
}