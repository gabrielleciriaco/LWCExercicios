import { LightningElement } from 'lwc';

const IMAGES = [
    'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg',
    'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg'
];

export default class atv02 extends LightningElement {
    currentImageIndex = 0;

    get imageSrc() {
        return IMAGES[this.currentImageIndex];
    }

    handleImageClick() {
        this.currentImageIndex = (this.currentImageIndex + 1) % IMAGES.length;
    }
}
