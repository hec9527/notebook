console.log('%c Your code running....', 'color:red');

function Ajax() {}

Ajax.prototype = {
    ajax: function (options) {
        const defaults = {
            type: 'GET',
            dataType: 'json',
            timeout: 15000,
            async: true,
        };
        options = Object.assign({}, defaults, options);

        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const status = xhr.status;
                if (status >= 200 || status < 300) {
                    options.success && options.success(xhr.responseText, xhr);
                } else {
                    options.error && options.error(status, xhr.response);
                }
            }
        };

        xhr.open(options.type, options.url, options.async);
        if (/post/i.test(options.type)) {
            xhr.setRequestHeader('Content-Type', options.contentType || 'application/x-www-form-urlencoded');
        }
        xhr.send(options.data || null);
    },
};

const $ = new Ajax();
