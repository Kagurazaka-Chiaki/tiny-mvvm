/**
 * 辅助函数
**/


// 解决 string 不是有效的 key, 但没有用
export function is_valid_key(
    key: string | number | symbol,
    object: object
): key is keyof typeof object {
    return key in object;
}
