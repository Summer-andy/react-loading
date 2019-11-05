/*
 * @Author: Andy
 * @Date: 2019-08-27 19:58:49
 * @LastEditors: Andy
 * @LastEditTime: 2019-09-12 11:05:09
 */
// In this file we explicity export everything. This is just to be thorough
// and explicit. This thorough exporting method can seem like a lot, but it
// allows for simpler scaling when your library grows in size, and even adds
// different tech like TypeScript
export { default as BoxLoading } from './BoxLoading';
export { default as CommonLoading } from './CommonLoading';
export { default as WaveLoading } from './WaveLoading'
