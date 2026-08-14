const jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, 'src/assets/images/logo.png');

async function resizeIcons() {
    console.log('Reading logo...');
    const image = await jimp.read(logoPath);
    
    // Android Mipmaps
    const androidSizes = [
        { name: 'mdpi', size: 48 },
        { name: 'hdpi', size: 72 },
        { name: 'xhdpi', size: 96 },
        { name: 'xxhdpi', size: 144 },
        { name: 'xxxhdpi', size: 192 },
    ];
    
    for (const res of androidSizes) {
        const outDir = path.join(__dirname, `android/app/src/main/res/mipmap-${res.name}`);
        if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
        
        const resized = image.clone().resize(res.size, res.size);
        await resized.writeAsync(path.join(outDir, 'ic_launcher.png'));
        await resized.writeAsync(path.join(outDir, 'ic_launcher_round.png'));
        console.log(`Saved Android ${res.name} (${res.size}x${res.size})`);
    }

    // iOS AppIcon
    const iosDir = path.join(__dirname, 'ios/BuddyHome/Images.xcassets/AppIcon.appiconset');
    if (fs.existsSync(iosDir)) {
        const iosSizes = [
            { name: '20x20@2x', size: 40 },
            { name: '20x20@3x', size: 60 },
            { name: '29x29@2x', size: 58 },
            { name: '29x29@3x', size: 87 },
            { name: '40x40@2x', size: 80 },
            { name: '40x40@3x', size: 120 },
            { name: '60x60@2x', size: 120 },
            { name: '60x60@3x', size: 180 },
            { name: '76x76@1x', size: 76 },
            { name: '76x76@2x', size: 152 },
            { name: '83.5x83.5@2x', size: 167 },
            { name: '1024x1024@1x', size: 1024 }
        ];

        let contentsJson = {
            images: [],
            info: { version: 1, author: "xcode" }
        };

        for (const res of iosSizes) {
            const [baseSize, scale] = res.name.split('@');
            const filename = `icon-${baseSize}@${scale}.png`;
            
            const resized = image.clone().resize(res.size, res.size);
            await resized.writeAsync(path.join(iosDir, filename));
            
            contentsJson.images.push({
                size: baseSize,
                idiom: baseSize === '76x76' || baseSize === '83.5x83.5' ? 'ipad' : baseSize === '1024x1024' ? 'ios-marketing' : 'iphone',
                filename: filename,
                scale: scale
            });
            console.log(`Saved iOS ${filename}`);
        }
        
        fs.writeFileSync(path.join(iosDir, 'Contents.json'), JSON.stringify(contentsJson, null, 2));
        console.log('Saved iOS Contents.json');
    }

    console.log('Done!');
}

resizeIcons().catch(console.error);
