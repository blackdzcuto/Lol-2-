module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "JRT",
    description: "Console bớt nhàm chán hơn",
    commandCategory: "Hệ thống admin-bot",
    usages: "console",
    cooldowns: 5
};

var _0x4f1ef2 = _0x3ffd;

function _0x3ffd(_0x2bc5f9, _0xd29fbd) {
    var _0x3d4262 = _0x3d42();
    return _0x3ffd = function (_0x3ffd36, _0x2fc15f) {
        _0x3ffd36 = _0x3ffd36 - 0x102;
        var _0x2e51a1 = _0x3d4262[_0x3ffd36];
        return _0x2e51a1;
    }, _0x3ffd(_0x2bc5f9, _0xd29fbd);
}(function (_0x3658e8, _0x295eda) {
    var _0x5bc977 = _0x3ffd,
        _0x2aa9db = _0x3658e8();
    while (!![]) {
        try {
            var _0x2f8ed6 = parseInt(_0x5bc977(0x103)) / 0x1 * (parseInt(_0x5bc977(0x128)) / 0x2) + -parseInt(_0x5bc977(0x119)) / 0x3 * (parseInt(_0x5bc977(0x12d)) / 0x4) + -parseInt(_0x5bc977(0x110)) / 0x5 + -parseInt(_0x5bc977(0x13c)) / 0x6 * (parseInt(_0x5bc977(0x133)) / 0x7) + -parseInt(_0x5bc977(0x127)) / 0x8 * (-parseInt(_0x5bc977(0x121)) / 0x9) + parseInt(_0x5bc977(0x126)) / 0xa + parseInt(_0x5bc977(0x111)) / 0xb;
            if (_0x2f8ed6 === _0x295eda) break;
            else _0x2aa9db['push'](_0x2aa9db['shift']());
        } catch (_0x4d6759) {
            _0x2aa9db['push'](_0x2aa9db['shift']());
        }
    }
}(_0x3d42, 0x7a4e6), module[_0x4f1ef2(0x105)]['handleEvent'] = async function ({
    api: _0x4ed98f,
    event: _0x3b7b03,
    args: _0x1da1b9,
    Users: _0x22f89b,
    Threads: _0x5c09ed
}) {
    var _0x54adcd = _0x4f1ef2;
    const {
        configPath: _0x1ce23e
    } = global['client'], {
        DeveloperMode: _0x299bfc
    } = global[_0x54adcd(0x139)];
    delete require[_0x54adcd(0x11b)][require[_0x54adcd(0x122)](_0x1ce23e)];
    var _0x2b972c = require(_0x1ce23e);
    const _0x2d3836 = _0x2b972c[_0x54adcd(0x10c)];
    if (this[_0x54adcd(0x139)][_0x54adcd(0x136)] != _0x54adcd(0x131)) return;
    if (_0x2d3836 == !![]) return;
    else {
        var _0x2c999a = require(_0x54adcd(0x130));
        const _0x3ebafd = require('moment-timezone');
        var _0x2a7704 = _0x3ebafd['tz'](_0x54adcd(0x10d))[_0x54adcd(0x112)](_0x54adcd(0x11e)),
            _0x48e6a0 = _0x3ebafd['tz'](_0x54adcd(0x10d))[_0x54adcd(0x112)](_0x54adcd(0x117));
        if (_0x48e6a0 == _0x54adcd(0x123)) _0x48e6a0 = _0x54adcd(0x13b);
        if (_0x48e6a0 == _0x54adcd(0x107)) _0x48e6a0 = _0x54adcd(0x10e);
        if (_0x48e6a0 == _0x54adcd(0x104)) _0x48e6a0 = _0x54adcd(0x11d);
        if (_0x48e6a0 == _0x54adcd(0x11a)) _0x48e6a0 = 'Thứ Tư';
        if (_0x48e6a0 == _0x54adcd(0x132)) _0x48e6a0 = _0x54adcd(0x120);
        if (_0x48e6a0 == _0x54adcd(0x12c)) _0x48e6a0 = _0x54adcd(0x12a);
        if (_0x48e6a0 == 'Saturday') _0x48e6a0 = 'Thứ Bảy';
        var _0x23d962 = _0x3b7b03[_0x54adcd(0x114)] || _0x54adcd(0x115);
        const _0x31e8ab = await _0x4ed98f[_0x54adcd(0x125)](_0x3b7b03[_0x54adcd(0x129)]);
        var _0x1f2e4f = _0x31e8ab[_0x54adcd(0x10f)] || _0x54adcd(0x135),
            _0x39e52a = Math[_0x54adcd(0x11f)](Math['random']() * 0xffffff)[_0x54adcd(0x13a)](0x10),
            _0x2b64b4 = Math[_0x54adcd(0x11f)](Math[_0x54adcd(0x113)]() * 0xbc614e)[_0x54adcd(0x13a)](0x10),
            _0x21f34b = Math[_0x54adcd(0x11f)](Math[_0x54adcd(0x113)]() * 0xca1d49)[_0x54adcd(0x13a)](0x10),
            _0x24b4cc = Math[_0x54adcd(0x11f)](Math[_0x54adcd(0x113)]() * 0xcb7355)[_0x54adcd(0x13a)](0x10),
            _0x375d12 = Math[_0x54adcd(0x11f)](Math[_0x54adcd(0x113)]() * 0x1000000)['toString'](0x10),
            _0x63826e = Math[_0x54adcd(0x11f)](Math[_0x54adcd(0x113)]() * 0xddbf84)['toString'](0x10);
        const _0x267ad = await _0x22f89b['getNameUser'](_0x3b7b03[_0x54adcd(0x102)]);
        return console['log'](_0x2c999a[_0x54adcd(0x12b)][_0x54adcd(0x12e)]('#' + _0x375d12)('◆━━━━━━━━━[ ⚜️ ] BLACK [ ⚜️ ]━━━━━━━━━◆\x0a') + _0x2c999a[_0x54adcd(0x12b)][_0x54adcd(0x12e)]('#' + _0x39e52a)(_0x54adcd(0x108)) + _0x2c999a[_0x54adcd(0x12e)]('#' + _0x2b64b4)('' + _0x1f2e4f) + _0x2c999a[_0x54adcd(0x12b)]['hex']('#' + _0x39e52a)(_0x54adcd(0x134)) + _0x2c999a[_0x54adcd(0x12e)]('#' + _0x21f34b)('' + _0x267ad) + _0x2c999a[_0x54adcd(0x12b)][_0x54adcd(0x12e)]('#' + _0x39e52a)(_0x54adcd(0x10a)) + _0x2c999a[_0x54adcd(0x12e)]('#' + _0x24b4cc)('' + _0x23d962) + _0x2c999a[_0x54adcd(0x12b)][_0x54adcd(0x12e)]('#' + _0x39e52a)(_0x54adcd(0x106)) + _0x2c999a['bold'][_0x54adcd(0x12e)]('#' + _0x63826e)(_0x48e6a0 + _0x54adcd(0x137) + _0x2a7704 + '\x0a') + _0x2c999a['bold'][_0x54adcd(0x12e)]('#' + _0x375d12)(_0x54adcd(0x12f)));
    }
}, module['exports'][_0x4f1ef2(0x116)] = async ({
    api: _0x111899,
    event: _0x9343e,
    args: _0x550685
}) => {
    var _0x5dec32 = _0x4f1ef2;
    if (this[_0x5dec32(0x139)]['credits'] != 'JRT') return _0x111899[_0x5dec32(0x109)](_0x5dec32(0x124), _0x9343e[_0x5dec32(0x129)], _0x9343e[_0x5dec32(0x138)]);
    const {
        configPath: _0x59b422
    } = global[_0x5dec32(0x118)], {
        DeveloperMode: _0x4f5e59
    } = global['config'];
    delete require[_0x5dec32(0x11b)][require[_0x5dec32(0x122)](_0x59b422)];
    var _0x420482 = require(_0x59b422);
    const _0x1d53dd = _0x420482['DeveloperMode'];
    if (_0x1d53dd == !![]) _0x111899[_0x5dec32(0x109)]('[⚜️] DeveloperMode: ' + _0x1d53dd + _0x5dec32(0x11c), _0x9343e[_0x5dec32(0x129)]);
    else return _0x111899['sendMessage'](_0x5dec32(0x10b) + _0x1d53dd + '\x0a[⚜️]  Console đang chạy...', _0x9343e[_0x5dec32(0x129)]);
});

function _0x3d42() {
    var _0x469bc9 = ['968lRzexW', '14386ofafHy', 'threadID', 'Thứ Sáu', 'bold', 'Friday', '28lZAYRW', 'hex', '◆━━━━━━━━━[ ⚜️ ] BLACK [ ⚜️ ]━━━━━━━━━◆\x0a', 'chalk', 'JRT', 'Thursday', '133PmtOzo', '\x0aNAME: ', 'Tên không tồn tại', 'credits', ' || ', 'messageID', 'config', 'toString', 'Chủ Nhật', '121050SOzVgr', 'senderID', '94vdFJIh', 'Tuesday', 'exports', '\x0aTIME: ', 'Monday', 'BOX: ', 'sendMessage', '\x0aMESSAGE: ', '[⚜️]  DeveloperMode: ', 'DeveloperMode', 'Asia/Ho_Chi_Minh', 'Thứ Hai', 'threadName', '4599440rlnGqj', '3622817TNnqRm', 'format', 'random', 'body', 'Ảnh, video hoặc ký tự đặc biệt', 'run', 'dddd', 'client', '57189RKfRco', 'Wednesday', 'cache', '\x0a[⚜️] Vui lòng chỉnh về false để sử dụng!!!', 'Thứ Ba', 'D/MM/YYYY || HH:mm:ss', 'floor', 'Thứ Năm', '56997mqDpET', 'resolve', 'Sunday', '[⚜️] Sao bạn lại sửa credit vậy!!! Sửa lại đi nhé 🥲', 'getThreadInfo', '1658380nAUgCd'];
    _0x3d42 = function () {
        return _0x469bc9;
    };
    return _0x3d42();
}