import { Sphere } from '@unicitylabs/sphere-sdk';
import { createNodeProviders } from '@unicitylabs/sphere-sdk/impl/nodejs';

async function main() {
  console.log('Sphere testnet tip bot baslatiliyor...');

  const { sphere, created, generatedMnemonic } = await Sphere.init({
    ...createNodeProviders({ network: 'testnet' }),
    autoGenerate: true,
    nametag: 'froreis',
  });

  if (created && generatedMnemonic) {
    console.log('YENI CUZDAN OLUSTURULDU.');
    console.log('Kurtarma ifadesi (KAYDET, KIMSEYLE PAYLASMA):');
    console.log(generatedMnemonic);
  }

  console.log('Benim ID: @' + sphere.identity?.nametag);

  const assets = await sphere.payments.getAssets();
  console.log('Cuzdan bakiyesi:', assets);

  console.log('Bot hazir. Tip gondermek icin recipient ID ve amount belirtin.');
}

main().catch((err) => {
  console.error('Hata olustu:', err);
});
