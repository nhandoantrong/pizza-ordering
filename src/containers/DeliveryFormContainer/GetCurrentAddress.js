

export const getCurrentAddress = () => {
    var is_chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    var is_ssl = 'https:' == document.location.protocol;
    if (is_chrome && !is_ssl) {
        return false;
    }
}