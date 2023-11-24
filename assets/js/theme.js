var checkBox1 = document.getElementById('darkSwitch');
var checkBox2 = document.getElementById('blindSwitch');

var theme = window.localStorage.getItem('data-theme');
if (theme) document.documentElement.setAttribute('data-theme', theme);
checkBox1.checked = theme == 'dark' ? true : false;
checkBox2.checked = theme == 'blind' ? true : false;
checkBox1.addEventListener('change', function () {
    if (this.checked) {
        checkBox2.checked = false;
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('data-theme', 'light');
    }
});
checkBox2.addEventListener('change', function () {
    if (this.checked) {
        checkBox1.checked = false;
        document.documentElement.setAttribute('data-theme', 'blind');
        window.localStorage.setItem('data-theme', 'blind');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('data-theme', 'light');
    }
});