export class RealEstate{
    name?: string;
    city?: string;
    municipality?: string;
    microlocation?: string;
    street?: string;
    area?: number;
    rooms?: number;
    constructionYear?: Date;
    state?: string;
    heating?: string;
    floor?: number;
    totalFloors?: number;
    parking?: string;
    monthlyUtilities?: number;
    price?: number;
    about?: string;
    characteristics?: Array<string>;
    sold?: boolean;
    advertiser?:Array<any>;
    images?: Array<string>;
    type: string;
    modifyDate: Date;
}