/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '宝贝老婆, 贴贴～，早安安～',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相恋的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '宝贝老婆, 贴贴～，早安安～',
    desc: `
      🗓️**{{date.DATA}}**
      
      下个休息日🎉：{{holidaytts.DATA}}
      
      ---
      
      今日{{city.DATA}}天气☁️：{{weather.DATA}} ,   气温🌡️:{{max_temperature.DATA}} / {{min_temperature.DATA}}

      天气小tips📝: {{notice.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们在一起的第{{love_day.DATA}}天啦~, 爱你❤️~
      
      {{birthday_message.DATA}}
      
      ---
      💌:{{earthy_love_words.DATA}}

      💓:{{moment_copyrighting.DATA}}
      
      🥰:{{poetry_content.DATA}}  ——出自:<<{{poetry_title.DATA}}>>
    `
  },
]

module.exports = TEMPLATE_CONFIG
