import {
    allowRandomColorProperty, animDurationProperty, bigShineColorProperty, colorProperty, srcProperty,
    Common, enableFlashingProperty, fillColorProperty, shineCountProperty, smallShineColorProperty,
    shineDistanceMultipleProperty, shineSizeProperty, shineTurnAngleProperty, smallShineOffsetAngleProperty
} from './shine-button.common';
import { Color, layout } from 'tns-core-modules/ui/core/view';
import { screen } from 'tns-core-modules/platform';

declare var WCLShineButton;

export class ShineButton extends Common {
    nativeView;

    public createNativeView() {
        let btn = WCLShineButton.alloc().init();
        this.nativeView = btn;
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

            const frame = CGRectMake(0, 0, width, height);
            this.nativeView.frame = frame;
            this.nativeView.initLayers();
        }
    }

    [srcProperty.setNative](value: string) {
       if(value){
           this.nativeView.customImage = UIImage.imageNamed('customicon');
       }
    }

    [colorProperty.setNative](value: string) {
        if(value){
            this.nativeView.color =  new Color(value).ios;
        }
    }

    [fillColorProperty.setNative](value: string) {
        if(value){
            this.nativeView.fillColor =  new Color(value).ios;
        }
    }

    [allowRandomColorProperty.setNative](value: boolean) {
        if(value){
            this.nativeView.allowRandomColor = value;
        }
    }

    [animDurationProperty.setNative](value: number) {
        if(value){
            this.nativeView.animDuration = value;
        }
    }

    [bigShineColorProperty.setNative](value: string) {
        if(value){
            this.nativeView.bigShineColor = new Color(value).ios;
        }
    }

    [enableFlashingProperty.setNative](value: boolean) {
        if(value){
            this.nativeView.enableFlashing = value;
        }
    }

    [shineCountProperty.setNative](value: number) {
        if(value){
            this.nativeView.shineCount = value;
        }
    }

    [shineTurnAngleProperty.setNative](value: number) {
        if(value){
            this.nativeView.shineTurnAngle = value;
        }
    }

    [shineDistanceMultipleProperty.setNative](value: number) {
        if(value){
            this.nativeView.shineDistanceMultiple = value;
        }
    }

    [smallShineOffsetAngleProperty.setNative](value: number) {
        if(value){
            this.nativeView.smallShineOffsetAngle = value;
        }
    }

    [smallShineColorProperty.setNative](value: string) {
        if(value){
            this.nativeView.smallShineColor = new Color(value).ios;
        }
    }

    [shineSizeProperty.setNative](value: number) {
        if(value){
            this.nativeView.shineSize = value;
        }
    }
}
