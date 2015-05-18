'use strict';
/**
 * --------------------------------
 * 스토어 테스크
 * Require Store Module
 * --------------------------------
 */

/**
 * 모듈 호출(요구)
 * --------------------------------
 */
var store = require('./storeModule.js');

/**
 * 모듈 사용(활용)
 * --------------------------------
 */
store.save();  // 저장
store.load();  // 읽기
store.clear(); // 지우기