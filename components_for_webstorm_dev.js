import ScrollView from '@dcloudio/uni-h5/src/core/view/components/scroll-view/index'
import Form from '@dcloudio/uni-h5/src/core/view/components/form/index'
import Swiper from '@dcloudio/uni-h5/src/core/view/components/swiper/index'
import Radio from '@dcloudio/uni-h5/src/core/view/components/radio/index'
import Progress from '@dcloudio/uni-h5/src/core/view/components/progress/index'
import ResizeSensor from '@dcloudio/uni-h5/src/core/view/components/resize-sensor/index'
import Input from '@dcloudio/uni-h5/src/core/view/components/input/index'
import MovableArea from '@dcloudio/uni-h5/src/core/view/components/movable-area/index'
import Checkbox from '@dcloudio/uni-h5/src/core/view/components/checkbox/index'
import Label from '@dcloudio/uni-h5/src/core/view/components/label/index'
import Slider from '@dcloudio/uni-h5/src/core/view/components/slider/index'
import Image from '@dcloudio/uni-h5/src/core/view/components/image/index'
import Canvas from '@dcloudio/uni-h5/src/core/view/components/canvas/index'
import SwiperItem from '@dcloudio/uni-h5/src/core/view/components/swiper-item/index'
import PickerView from '@dcloudio/uni-h5/src/core/view/components/picker-view/index'
import Audio from '@dcloudio/uni-h5/src/core/view/components/audio/index'
import Textarea from '@dcloudio/uni-h5/src/core/view/components/textarea/index'
import Button from '@dcloudio/uni-h5/src/core/view/components/button/index'
import Switch from '@dcloudio/uni-h5/src/core/view/components/switch/index'
import Navigator from '@dcloudio/uni-h5/src/core/view/components/navigator/index'
import RichText from '@dcloudio/uni-h5/src/core/view/components/rich-text/index'
import RadioGroup from '@dcloudio/uni-h5/src/core/view/components/radio-group/index'
import CheckboxGroup from '@dcloudio/uni-h5/src/core/view/components/checkbox-group/index'
import Text from '@dcloudio/uni-h5/src/core/view/components/text/index'
import Icon from '@dcloudio/uni-h5/src/core/view/components/icon/index'
import MovableView from '@dcloudio/uni-h5/src/core/view/components/movable-view/index'
import Editor from '@dcloudio/uni-h5/src/core/view/components/editor/index'
import PickerViewColumn from '@dcloudio/uni-h5/src/core/view/components/picker-view-column/index'
import Ad from '@dcloudio/uni-h5/src/platforms/h5/view/components/ad/index.vue'
import CoverImage from '@dcloudio/uni-h5/src/platforms/h5/view/components/cover-image/index.vue'
import CoverView from '@dcloudio/uni-h5/src/platforms/h5/view/components/cover-view/index.vue'
import Map from '@dcloudio/uni-h5/src/platforms/h5/view/components/map/index.vue'
import Picker from '@dcloudio/uni-h5/src/platforms/h5/view/components/picker/index.vue'
import Video from '@dcloudio/uni-h5/src/platforms/h5/view/components/video/index.vue'
import View from '@dcloudio/uni-h5/src/platforms/h5/view/components/view/index.vue'
import WebView from '@dcloudio/uni-h5/src/platforms/h5/view/components/web-view/index.vue'



/***********************     uView组件    ****************************/
import uColumnNotice from '@/uni_modules/uview-ui/components/u-column-notice/u-column-notice'
import uAvatar from '@/uni_modules/uview-ui/components/u-avatar/u-avatar'
import uSwitch from '@/uni_modules/uview-ui/components/u-switch/u-switch'
import uToolbar from '@/uni_modules/uview-ui/components/u-toolbar/u-toolbar'
import uRadio from '@/uni_modules/uview-ui/components/u-radio/u-radio'
import uList from '@/uni_modules/uview-ui/components/u-list/u-list'
import uSafeBottom from '@/uni_modules/uview-ui/components/u-safe-bottom/u-safe-bottom'
import uCountTo from '@/uni_modules/uview-ui/components/u-count-to/u-count-to'
import uSkeleton from '@/uni_modules/uview-ui/components/u-skeleton/u-skeleton'
import uEmpty from '@/uni_modules/uview-ui/components/u-empty/u-empty'
import uTransition from '@/uni_modules/uview-ui/components/u-transition/u-transition'
import uButton from '@/uni_modules/uview-ui/components/u-button/u-button'
import uLink from '@/uni_modules/uview-ui/components/u-link/u-link'
import uPopup from '@/uni_modules/uview-ui/components/u-popup/u-popup'
import uLine from '@/uni_modules/uview-ui/components/u-line/u-line'
import uBackTop from '@/uni_modules/uview-ui/components/u-back-top/u-back-top'
import uCollapse from '@/uni_modules/uview-ui/components/u-collapse/u-collapse'
import uTabbarItem from '@/uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item'
import uCell from '@/uni_modules/uview-ui/components/u-cell/u-cell'
import uSearch from '@/uni_modules/uview-ui/components/u-search/u-search'
import uCheckbox from '@/uni_modules/uview-ui/components/u-checkbox/u-checkbox'
import uCellGroup from '@/uni_modules/uview-ui/components/u-cell-group/u-cell-group'
import uCarKeyboard from '@/uni_modules/uview-ui/components/u-car-keyboard/u-car-keyboard'
import uLoadingIcon from '@/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon'
import uScrollList from '@/uni_modules/uview-ui/components/u-scroll-list/u-scroll-list'
import uActionSheet from '@/uni_modules/uview-ui/components/u-action-sheet/u-action-sheet'
import uGrid from '@/uni_modules/uview-ui/components/u-grid/u-grid'
import uSubsection from '@/uni_modules/uview-ui/components/u-subsection/u-subsection'
import uImage from '@/uni_modules/uview-ui/components/u-image/u-image'
import uTooltip from '@/uni_modules/uview-ui/components/u-tooltip/u-tooltip'
import uUpload from '@/uni_modules/uview-ui/components/u-upload/u-upload'
import uDropdown from '@/uni_modules/uview-ui/components/u-dropdown/u-dropdown'
import uParse from '@/uni_modules/uview-ui/components/u-parse/u-parse'
import uNumberKeyboard from '@/uni_modules/uview-ui/components/u-number-keyboard/u-number-keyboard'
import uToast from '@/uni_modules/uview-ui/components/u-toast/u-toast'
import uTr from '@/uni_modules/uview-ui/components/u-tr/u-tr'
import uReadMore from '@/uni_modules/uview-ui/components/u-read-more/u-read-more'
import uIcon from '@/uni_modules/uview-ui/components/u-icon/u-icon'
import uLoadmore from '@/uni_modules/uview-ui/components/u-loadmore/u-loadmore'
import uAlert from '@/uni_modules/uview-ui/components/u-alert/u-alert'
import uInput from '@/uni_modules/uview-ui/components/u-input/u-input'
import uText from '@/uni_modules/uview-ui/components/u-text/u-text'
import month from '@/uni_modules/uview-ui/components/u-calendar/month'
import uCalendar from '@/uni_modules/uview-ui/components/u-calendar/u-calendar'
import header from '@/uni_modules/uview-ui/components/u-calendar/header'
import uRadioGroup from '@/uni_modules/uview-ui/components/u-radio-group/u-radio-group'
import uCollapseItem from '@/uni_modules/uview-ui/components/u-collapse-item/u-collapse-item'
import uCodeInput from '@/uni_modules/uview-ui/components/u-code-input/u-code-input'
import uNumberBox from '@/uni_modules/uview-ui/components/u-number-box/u-number-box'
import uLoadingPage from '@/uni_modules/uview-ui/components/u-loading-page/u-loading-page'
import uSticky from '@/uni_modules/uview-ui/components/u-sticky/u-sticky'
import uNoticeBar from '@/uni_modules/uview-ui/components/u-notice-bar/u-notice-bar'
import uSwipeAction from '@/uni_modules/uview-ui/components/u-swipe-action/u-swipe-action'
import uPicker from '@/uni_modules/uview-ui/components/u-picker/u-picker'
import uOverlay from '@/uni_modules/uview-ui/components/u-overlay/u-overlay'
import uIndexAnchor from '@/uni_modules/uview-ui/components/u-index-anchor/u-index-anchor'
import uAvatarGroup from '@/uni_modules/uview-ui/components/u-avatar-group/u-avatar-group'
import uSwiper from '@/uni_modules/uview-ui/components/u-swiper/u-swiper'
import uForm from '@/uni_modules/uview-ui/components/u-form/u-form'
import uCol from '@/uni_modules/uview-ui/components/u-col/u-col'
import uDropdownItem from '@/uni_modules/uview-ui/components/u-dropdown-item/u-dropdown-item'
import uTable from '@/uni_modules/uview-ui/components/u-table/u-table'
import uKeyboard from '@/uni_modules/uview-ui/components/u-keyboard/u-keyboard'
import uSteps from '@/uni_modules/uview-ui/components/u-steps/u-steps'
import uFormItem from '@/uni_modules/uview-ui/components/u-form-item/u-form-item'
import uLineProgress from '@/uni_modules/uview-ui/components/u-line-progress/u-line-progress'
import uNotify from '@/uni_modules/uview-ui/components/u-notify/u-notify'
import uNavbar from '@/uni_modules/uview-ui/components/u-navbar/u-navbar'
import uRowNotice from '@/uni_modules/uview-ui/components/u-row-notice/u-row-notice'
import uRate from '@/uni_modules/uview-ui/components/u-rate/u-rate'
import uTag from '@/uni_modules/uview-ui/components/u-tag/u-tag'
import uCircleProgress from '@/uni_modules/uview-ui/components/u-circle-progress/u-circle-progress'
import uStepsItem from '@/uni_modules/uview-ui/components/u-steps-item/u-steps-item'
import uTabs from '@/uni_modules/uview-ui/components/u-tabs/u-tabs'
import uStatusBar from '@/uni_modules/uview-ui/components/u-status-bar/u-status-bar'
import uGap from '@/uni_modules/uview-ui/components/u-gap/u-gap'
import uTextarea from '@/uni_modules/uview-ui/components/u-textarea/u-textarea'
import uSwiperIndicator from '@/uni_modules/uview-ui/components/u-swiper-indicator/u-swiper-indicator'
import uBadge from '@/uni_modules/uview-ui/components/u-badge/u-badge'
import uCountDown from '@/uni_modules/uview-ui/components/u-count-down/u-count-down'
import uDatetimePicker from '@/uni_modules/uview-ui/components/u-datetime-picker/u-datetime-picker'
import uRow from '@/uni_modules/uview-ui/components/u-row/u-row'
import uCheckboxGroup from '@/uni_modules/uview-ui/components/u-checkbox-group/u-checkbox-group'
import uSlider from '@/uni_modules/uview-ui/components/u-slider/u-slider'
import uTabbar from '@/uni_modules/uview-ui/components/u-tabbar/u-tabbar'
import uAlbum from '@/uni_modules/uview-ui/components/u-album/u-album'
import uGridItem from '@/uni_modules/uview-ui/components/u-grid-item/u-grid-item'
import uCode from '@/uni_modules/uview-ui/components/u-code/u-code'
import uIndexList from '@/uni_modules/uview-ui/components/u-index-list/u-index-list'
import uTd from '@/uni_modules/uview-ui/components/u-td/u-td'
import uPickerColumn from '@/uni_modules/uview-ui/components/u-picker-column/u-picker-column'
import uNoNetwork from '@/uni_modules/uview-ui/components/u-no-network/u-no-network'
import uIndexItem from '@/uni_modules/uview-ui/components/u-index-item/u-index-item'
import uModal from '@/uni_modules/uview-ui/components/u-modal/u-modal'
import uSwipeActionItem from '@/uni_modules/uview-ui/components/u-swipe-action-item/u-swipe-action-item'
import uDivider from '@/uni_modules/uview-ui/components/u-divider/u-divider'
import uTabsItem from '@/uni_modules/uview-ui/components/u-tabs-item/u-tabs-item'
import uListItem from '@/uni_modules/uview-ui/components/u-list-item/u-list-item'

export default (Vue)=>{
    Vue.component(uColumnNotice.name, uColumnNotice);
    Vue.component(uAvatar.name, uAvatar);
    Vue.component(uSwitch.name, uSwitch);
    Vue.component(uToolbar.name, uToolbar);
    Vue.component(uRadio.name, uRadio);
    Vue.component(uList.name, uList);
    Vue.component(uSafeBottom.name, uSafeBottom);
    Vue.component(uCountTo.name, uCountTo);
    Vue.component(uSkeleton.name, uSkeleton);
    Vue.component(uEmpty.name, uEmpty);
    Vue.component(uTransition.name, uTransition);
    Vue.component(uButton.name, uButton);
    Vue.component(uLink.name, uLink);
    Vue.component(uPopup.name, uPopup);
    Vue.component(uLine.name, uLine);
    Vue.component(uBackTop.name, uBackTop);
    Vue.component(uCollapse.name, uCollapse);
    Vue.component(uTabbarItem.name, uTabbarItem);
    Vue.component(uCell.name, uCell);
    Vue.component(uSearch.name, uSearch);
    Vue.component(uCheckbox.name, uCheckbox);
    Vue.component(uCellGroup.name, uCellGroup);
    Vue.component(uCarKeyboard.name, uCarKeyboard);
    Vue.component(uLoadingIcon.name, uLoadingIcon);
    Vue.component(uScrollList.name, uScrollList);
    Vue.component(uActionSheet.name, uActionSheet);
    Vue.component(uGrid.name, uGrid);
    Vue.component(uSubsection.name, uSubsection);
    Vue.component(uImage.name, uImage);
    Vue.component(uTooltip.name, uTooltip);
    Vue.component(uUpload.name, uUpload);
    Vue.component(uDropdown.name, uDropdown);
    Vue.component(uParse.name, uParse);
    Vue.component(uNumberKeyboard.name, uNumberKeyboard);
    Vue.component(uToast.name, uToast);
    Vue.component(uTr.name, uTr);
    Vue.component(uReadMore.name, uReadMore);
    Vue.component(uIcon.name, uIcon);
    Vue.component(uLoadmore.name, uLoadmore);
    Vue.component(uAlert.name, uAlert);
    Vue.component(uInput.name, uInput);
    Vue.component(uText.name, uText);
    Vue.component(month.name, month);
    Vue.component(uCalendar.name, uCalendar);
    Vue.component(header.name, header);
    Vue.component(uRadioGroup.name, uRadioGroup);
    Vue.component(uCollapseItem.name, uCollapseItem);
    Vue.component(uCodeInput.name, uCodeInput);
    Vue.component(uNumberBox.name, uNumberBox);
    Vue.component(uLoadingPage.name, uLoadingPage);
    Vue.component(uSticky.name, uSticky);
    Vue.component(uNoticeBar.name, uNoticeBar);
    Vue.component(uSwipeAction.name, uSwipeAction);
    Vue.component(uPicker.name, uPicker);
    Vue.component(uOverlay.name, uOverlay);
    Vue.component(uIndexAnchor.name, uIndexAnchor);
    Vue.component(uAvatarGroup.name, uAvatarGroup);
    Vue.component(uSwiper.name, uSwiper);
    Vue.component(uForm.name, uForm);
    Vue.component(uCol.name, uCol);
    Vue.component(uDropdownItem.name, uDropdownItem);
    Vue.component(uTable.name, uTable);
    Vue.component(uKeyboard.name, uKeyboard);
    Vue.component(uSteps.name, uSteps);
    Vue.component(uFormItem.name, uFormItem);
    Vue.component(uLineProgress.name, uLineProgress);
    Vue.component(uNotify.name, uNotify);
    Vue.component(uNavbar.name, uNavbar);
    Vue.component(uRowNotice.name, uRowNotice);
    Vue.component(uRate.name, uRate);
    Vue.component(uTag.name, uTag);
    Vue.component(uCircleProgress.name, uCircleProgress);
    Vue.component(uStepsItem.name, uStepsItem);
    Vue.component(uTabs.name, uTabs);
    Vue.component(uStatusBar.name, uStatusBar);
    Vue.component(uGap.name, uGap);
    Vue.component(uTextarea.name, uTextarea);
    Vue.component(uSwiperIndicator.name, uSwiperIndicator);
    Vue.component(uBadge.name, uBadge);
    Vue.component(uCountDown.name, uCountDown);
    Vue.component(uDatetimePicker.name, uDatetimePicker);
    Vue.component(uRow.name, uRow);
    Vue.component(uCheckboxGroup.name, uCheckboxGroup);
    Vue.component(uSlider.name, uSlider);
    Vue.component(uTabbar.name, uTabbar);
    Vue.component(uAlbum.name, uAlbum);
    Vue.component(uGridItem.name, uGridItem);
    Vue.component(uCode.name, uCode);
    Vue.component(uIndexList.name, uIndexList);
    Vue.component(uTd.name, uTd);
    Vue.component(uPickerColumn.name, uPickerColumn);
    Vue.component(uNoNetwork.name, uNoNetwork);
    Vue.component(uIndexItem.name, uIndexItem);
    Vue.component(uModal.name, uModal);
    Vue.component(uSwipeActionItem.name, uSwipeActionItem);
    Vue.component(uDivider.name, uDivider);
    Vue.component(uTabsItem.name, uTabsItem);
    Vue.component(uListItem.name, uListItem);

    Vue.component(ScrollView.name, ScrollView);
    Vue.component(Form.name, Form);
    Vue.component(Swiper.name, Swiper);
    Vue.component(Radio.name, Radio);
    Vue.component(Progress.name, Progress);
    Vue.component(ResizeSensor.name, ResizeSensor);
    Vue.component(Input.name, Input);
    Vue.component(MovableArea.name, MovableArea);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(Label.name, Label);
    Vue.component(Slider.name, Slider);
    Vue.component(Image.name, Image);
    Vue.component(Canvas.name, Canvas);
    Vue.component(SwiperItem.name, SwiperItem);
    Vue.component(PickerView.name, PickerView);
    Vue.component(Audio.name, Audio);
    Vue.component(Textarea.name, Textarea);
    Vue.component(Button.name, Button);
    Vue.component(Switch.name, Switch);
    Vue.component(Navigator.name, Navigator);
    Vue.component(RichText.name, RichText);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Text.name, Text);
    Vue.component(Icon.name, Icon);
    Vue.component(MovableView.name, MovableView);
    Vue.component(Editor.name, Editor);
    Vue.component(PickerViewColumn.name, PickerViewColumn);
    Vue.component(Ad.name, Ad);
    Vue.component(CoverImage.name, CoverImage);
    Vue.component(Map.name, Map);
    Vue.component(CoverView.name, CoverView);
    Vue.component(Picker.name, Picker);
    Vue.component(Video.name, Video);
    Vue.component(View.name, View);
    Vue.component(WebView.name, WebView);
}


