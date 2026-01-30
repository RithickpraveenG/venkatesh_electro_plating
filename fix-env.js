const fs = require('fs');
const path = require('path');

const content = `DATABASE_URL="postgresql://admin:password@localhost:5432/industrial_plating?schema=public"
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=sendervenkateshelectroplating@gmail.com
SMTP_PASS=gnuplwgpxeolazqo`;

try {
    const filePath = path.join(__dirname, '.env');
    // Force write with UTF-8 encoding
    fs.writeFileSync(filePath, content, { encoding: 'utf8', flag: 'w' });
    console.log('Successfully rewrote .env as UTF-8');
} catch (e) {
    console.error('Failed to write .env:', e);
}
