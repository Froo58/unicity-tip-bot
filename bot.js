import { Sphere } from '@unicitylabs/sphere-sdk';
import { createNodeProviders } from '@unicitylabs/sphere-sdk/impl/nodejs';

async function main() {
  console.log('Sphere testnet2 tip bot baslatiliyor...');

  const providers = createNodeProviders({
    network: 'testnet',
    dataDir: './wallet-data',
    oracle: {
      apiKey: 'sk_ddc3cfcc001e4a28ac3fad7407f99590',
    },
  });

  const { sphere, created, generatedMnemonic } = await Sphere.init({
    ...providers,
    network: "testnet", autoGenerate: true,
    nametag: 'froreis',
  });

  if (created && generatedMnemonic) {
    console.log('YENI CUZDAN OLUSTURULDU!');
    console.log('Kurtarma ifadesi (KAYDET, KIMSEYLE PAYLASMA):');
    console.log(generatedMnemonic);
  }

  console.log('Adres:', sphere.identity?.directAddress);
  console.log('ID: @' + sphere.identity?.nametag);

  try {
    const assets = await sphere.payments.getAssets();
    console.log('Cuzdan varliklari:', JSON.stringify(assets, null, 2));
  } catch (e) {
    console.log('Bakiye alinamadi:', e.message);
  }

  console.log('Bot hazir. Testnet2 uzerinde calisiyor.');
}

main().catch((err) => {
  console.error('Hata:', err.message);
  process.exit(1);
});
