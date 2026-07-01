import { Sphere } from '@unicitylabs/sphere-sdk';

async function main() {
  console.log('Sphere testnet tip bot baslatiliyor...');

  const { sphere, created, generatedMnemonic } = await Sphere.init({
    network: 'testnet2',
    autoGenerate: true,
    nametag: 'froreis',
  });

  if (created && generatedMnemonic) {
    console.log('YENI CUZDAN OLUSTURULDU.');
    console.log('Kurtarma ifadesi (KAYDET, KIMSEYLE PAYLASMA):');
    console.log(generatedMnemonic);
  }

  console.log('Benim ID: @' + sphere.identity?.nametag);

  try {
    const assets = await sphere.payments.getAssets();
    console.log('Cuzdan bakiyesi:', assets);
  } catch (e) {
    console.log('Bakiye alinamadi (testnet bos olabilir):', e.message);
  }

  console.log('Bot hazir.');
}

main().catch((err) => {
  console.error('Hata:', err.message);
});
