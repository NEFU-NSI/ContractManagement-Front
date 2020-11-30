/**
 *验证邮箱
 * @param value
 * @returns {boolean}
 */
export function validateEmail(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return !reg.test(value) ? true : false
}
