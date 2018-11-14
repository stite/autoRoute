module.exports = sourse => {
  if (/<routeMeta[\w\W]*routeMeta>/g.test(sourse)) {
    try {
      let mate = new Function('', `return ${sourse.match(/<routeMeta>([\w\W]*)<\/routeMeta>/)[1].replace(/\s/g,"")}`);
      mate = mate();
      sourse = sourse.replace(/export\s+default\s+{/, `export default {meta:${JSON.stringify(mate)},`);
    } catch (error) {
      console.log(`loader.js转换出错${error}`);
    }
    return sourse.replace(/<routeMeta[\w\W]*routeMeta>/g, "");
  }
  return sourse;
}