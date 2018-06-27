import {
    allowRandomColorProperty, animDurationProperty, bigShineColorProperty, colorProperty, srcProperty,
    Common, enableFlashingProperty, fillColorProperty, shineCountProperty, smallShineColorProperty,
    shineDistanceMultipleProperty, shineSizeProperty, shineTurnAngleProperty, smallShineOffsetAngleProperty
} from './shine-button.common';
import { Color } from 'tns-core-modules/color';
import * as utils from "tns-core-modules/utils/utils";
import { screen } from 'tns-core-modules/platform';
import { layout } from 'tns-core-modules/ui/core/view';

declare let com: any;

export class ShineButton extends Common {
    nativeView;
    btn;

    public createNativeView() {
        let btn = new com.sackcentury.shinebuttonlib.ShineButton(this._context);

        let container = new android.widget.FrameLayout(this._context);
        let layoutParams = new android.widget.FrameLayout.LayoutParams(100, 100);
        container.setLayoutParams(layoutParams);
        container.addView(btn);

        this.btn = btn;
        this.nativeView = container;
        return this.nativeView;
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        const nativeView = this.nativeView;
        if (nativeView) {
            const measuredWidth = layout.getMeasureSpecSize(widthMeasureSpec);
            const measuredHeight = layout.getMeasureSpecSize(heightMeasureSpec);

            const scale = screen.mainScreen.scale;
            const width = typeof this.width === 'number' ? this.width : measuredWidth / scale;
            const height = typeof this.height === 'number' ? this.height : measuredHeight / scale;
            this.setMeasuredDimension(measuredWidth, measuredHeight);

            let layoutParams = new android.widget.FrameLayout.LayoutParams(height, width);
            this.nativeView.setLayoutParams(layoutParams);
        }
    }

    [srcProperty.setNative](value: string) {
        if(value){
            this.btn.setShapeResource(ShineButton.getIconResourceId(value));
        }
    }

    [colorProperty.setNative](value: string) {
        if(value){
            this.btn.setBtnColor(new Color(value).android);
        }
    }

    [fillColorProperty.setNative](value: string) {
        if(value){
            this.btn.setBtnFillColor(new Color(value).android);

        }
    }

    [allowRandomColorProperty.setNative](value: boolean) {
        if(value){
            this.btn.setAllowRandomColor(value);
        }
    }

    [animDurationProperty.setNative](value: number) {
        if(value){
            value *= 1000;
            this.btn.setAnimDuration(value);
            this.btn.setClickAnimDuration(value / 5);
        }
    }

    [bigShineColorProperty.setNative](value: string) {
        if(value){
            this.btn.setBigShineColor(new Color(value).android);
        }
    }

    [enableFlashingProperty.setNative](value: boolean) {
        if(value){
            this.btn.enableFlashing(value);
        }
    }

    [shineCountProperty.setNative](value: number) {
        if(value){
            // this.btn.setShineCount(value);

        }
    }

    [shineTurnAngleProperty.setNative](value) {
        if(value){
            this.btn.setShineTurnAngle(parseFloat(value));
        }
    }

    [shineDistanceMultipleProperty.setNative](value) {
        if(value){
            // todo: make other properties consistent netween ios and android
            this.btn.setShineDistanceMultiple(parseFloat(value)+ 0.3);
        }
    }

    [smallShineOffsetAngleProperty.setNative](value) {
        if(value){
            this.btn.setSmallShineOffAngle(parseFloat(value));
        }
    }

    [smallShineColorProperty.setNative](value: string) {
        if(value){
            this.btn.setSmallShineColor(new Color(value).android);
        }
    }

    [shineSizeProperty.setNative](value: number) {
        if(value){
            this.btn.setShineSize(value);
        }
    }

    private static getIconResourceId(resourcename: string): number {
        let res = utils.ad.getApplicationContext().getResources();
        return res.getIdentifier(resourcename, "drawable", utils.ad.getApplication().getPackageName());
    }
}
