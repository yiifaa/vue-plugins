/**
 * @module sti/validator
 * @tutorial validator
 * @desc 表单校验插件，用于表单输入项合法性的验证
 */
import 'validation/additional-methods'
import 'validation/localization/messages_zh'
import valiator from './valid-form'

//  import ''
export default {
  /**
   * 安装插件
   * @tutorial validator
   */
  install (Vue, options) {
    Vue.component('validator', valiator)
  }

}
