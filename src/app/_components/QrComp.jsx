'use client'

import { useQRCode } from "next-qrcode"

export default function QrComp({url = ''}) {
    const { Canvas } = useQRCode()
    return (
        <Canvas
            text={url}
            options={{
                type: 'image/jpeg',
                quality: 0.3,
                errorCorrectionLevel: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                    dark: '#000000FF',
                    light: '#FFFFFFFF',
                },
            }}
        />
    )
}
