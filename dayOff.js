const groupList = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const completedGroupList = ["AB", "BC", "CD", "DE", "EF", "FG", "GA"];

/**
 * 날짜를 index로 변환하여 반환
 * @param {Date} date
 * @returns {Number}
 */
const getIndex = (date) => {
    return Math.floor((date - 2268e5) / 864e5);
}

/**
 * index를 날짜로 변환하여 반환
 * @param {Number} index
 * @returns {Date}
 */
const getDate = (index) => {
    return new Date(index * 864e5 + 2268e5);
}

/**
 * index로 group을 반환
 * @param {Number} index
 * @returns {String}
 */
const getGroup = (index) => {
    const length = groupList.length;
    return groupList[index - Math.floor(index / length) * length];
}

/**
 * index로 group 2개를 반환
 * @param {Number} index
 * @returns {String[]}
 */
const getGroup2D = (index) => {
    const a = Math.floor(index / groupList.length);
    const x = (index + a);
    const y = (index + a + 1);
    return [getGroup(x), getGroup(y)];
}

/**
 * index로 완성형 group을 반환
 * @param {Number} index
 * @returns {String}
 */
const getCompletedGroup = (index) => {
    const length = completedGroupList.length;
    return completedGroupList[(index + Math.floor(index / length)) % length];
}

/**
 * index에 group이 포함되어 있는지 여부를 반환
 * @param {Number} index
 * @param {String} group
 * @returns {Boolean}
 */
const hasGroup = (index, group) => {
    return getGroup2D(index).includes(group);
}

export default {
    groupList,
    completedGroupList,
    getIndex,
    getDate,
    getGroup,
    getGroup2D,
    getCompletedGroup,
    hasGroup
}