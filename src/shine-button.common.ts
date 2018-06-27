import { booleanConverter, Property, View } from 'tns-core-modules/ui/core/view';

export class Common extends View {

}

export const srcProperty = new Property<Common, string>({
    name: 'src'
});

srcProperty.register(Common);

export const colorProperty = new Property<Common, string>({
    name: 'color'
});

colorProperty.register(Common);


export const fillColorProperty = new Property<Common, string>({
    name: 'fillColor'
});

fillColorProperty.register(Common);


export const allowRandomColorProperty = new Property<Common, boolean>({
    name: 'allowRandomColor',
    defaultValue: false,
    valueConverter: booleanConverter
});

allowRandomColorProperty.register(Common);


export const animDurationProperty = new Property<Common, number>({
    name: 'animDuration'
});

animDurationProperty.register(Common);

export const bigShineColorProperty = new Property<Common, string>({
    name: 'bigShineColor'
});

bigShineColorProperty.register(Common);


export const enableFlashingProperty = new Property<Common, boolean>({
    name: 'enableFlashing',
    defaultValue: false,
    valueConverter: booleanConverter
});

enableFlashingProperty.register(Common);


export const shineCountProperty = new Property<Common, number>({
    name: 'shineCount'
});

shineCountProperty.register(Common);

export const shineTurnAngleProperty = new Property<Common, number>({
    name: 'shineTurnAngle'
});

shineTurnAngleProperty.register(Common);

export const shineDistanceMultipleProperty = new Property<Common, number>({
    name: 'shineDistanceMultiple'
});

shineDistanceMultipleProperty.register(Common);

export const smallShineOffsetAngleProperty = new Property<Common, number>({
    name: 'smallShineOffsetAngle'
});

smallShineOffsetAngleProperty.register(Common);

export const smallShineColorProperty = new Property<Common, string>({
    name: 'smallShineColor'
});

smallShineColorProperty.register(Common);

export const shineSizeProperty = new Property<Common, number>({
    name: 'shineSize'
});

shineSizeProperty.register(Common);
