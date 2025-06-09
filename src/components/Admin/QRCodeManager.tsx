import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Printer, QrCode, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { generateQRCode, downloadQRCode } from '../../utils/qrcode';
import { mockRestaurants } from '../../data/restaurantData';

interface QRCodeManagerProps {
  selectedRestaurant?: string;
}

const QRCodeManager = ({ selectedRestaurant }: QRCodeManagerProps) => {
  const { t } = useLanguage();
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');
  const [menuUrl, setMenuUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Get the selected restaurant or default to the first one
  const restaurant = mockRestaurants.find(r => r.id === selectedRestaurant) || mockRestaurants[0];

  useEffect(() => {
    if (restaurant) {
      const baseUrl = window.location.origin;
      const fullMenuUrl = `${baseUrl}/menu/${restaurant.id}`;
      setMenuUrl(fullMenuUrl);
      generateQRCodeImage(fullMenuUrl);
    }
  }, [restaurant]);

  const generateQRCodeImage = async (url: string) => {
    setIsGenerating(true);
    try {
      const dataURL = await generateQRCode(url);
      setQrCodeDataURL(dataURL);
    } catch (error) {
      console.error('Erreur lors de la génération du QR code:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (qrCodeDataURL) {
      downloadQRCode(qrCodeDataURL, `${restaurant.name}-menu-qr.png`);
    }
  };

  const handlePrint = () => {
    if (qrCodeDataURL) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>QR Code - ${restaurant.name}</title>
              <style>
                body { 
                  font-family: Arial, sans-serif; 
                  text-align: center; 
                  padding: 20px; 
                }
                .qr-container { 
                  max-width: 400px; 
                  margin: 0 auto; 
                  border: 2px solid #333; 
                  padding: 20px; 
                  border-radius: 10px; 
                }
                .restaurant-name { 
                  font-size: 24px; 
                  font-weight: bold; 
                  margin-bottom: 10px; 
                }
                .instruction { 
                  font-size: 16px; 
                  margin: 15px 0; 
                }
                .qr-image { 
                  max-width: 100%; 
                  height: auto; 
                }
                @media print {
                  body { margin: 0; }
                  .qr-container { border: none; }
                }
              </style>
            </head>
            <body>
              <div class="qr-container">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="instruction">Scannez pour voir notre menu</div>
                <img src="${qrCodeDataURL}" alt="QR Code Menu" class="qr-image" />
                <div class="instruction">Scan to view our menu</div>
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const openMenuPreview = () => {
    window.open(menuUrl, '_blank');
  };

  if (!restaurant) {
    return <div>Aucun restaurant sélectionné</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Générateur de QR Code</h2>
        <p className="text-gray-600">
          Générez et téléchargez le QR code pour permettre à vos clients d'accéder facilement au menu de {restaurant.name}.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* QR Code Display */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              {t('qr.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {isGenerating ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            ) : qrCodeDataURL ? (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border inline-block">
                  <img 
                    src={qrCodeDataURL} 
                    alt="QR Code Menu" 
                    className="mx-auto"
                    style={{ maxWidth: '250px', height: 'auto' }}
                  />
                </div>
                <p className="text-gray-600">{t('qr.description')}</p>
                <div className="flex gap-2 justify-center">
                  <Button onClick={handleDownload} className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {t('qr.download')}
                  </Button>
                  <Button variant="outline" onClick={handlePrint} className="flex items-center gap-2">
                    <Printer className="h-4 w-4" />
                    {t('qr.print')}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 h-64 flex items-center justify-center">
                Erreur lors de la génération du QR code
              </div>
            )}
          </CardContent>
        </Card>

        {/* Menu URL and Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Paramètres du menu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="menuUrl">URL du menu</Label>
              <div className="flex gap-2">
                <Input
                  id="menuUrl"
                  value={menuUrl}
                  readOnly
                  className="bg-gray-50"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={openMenuPreview}
                  title="Ouvrir le menu"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Cette URL pointe vers votre menu public
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Instructions d'utilisation</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Téléchargez le QR code en format PNG</li>
                <li>• Imprimez-le sur vos tables, menus papier ou affiches</li>
                <li>• Les clients peuvent scanner avec l'appareil photo de leur téléphone</li>
                <li>• Aucune application spéciale requise</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Avantages</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Menu toujours à jour instantanément</li>
                <li>• Réduit les contacts physiques</li>
                <li>• Accessible en français et anglais</li>
                <li>• Statistiques de consultation disponibles</li>
              </ul>
            </div>

            <Button 
              onClick={() => generateQRCodeImage(menuUrl)} 
              variant="outline" 
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? 'Génération...' : 'Régénérer le QR Code'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QRCodeManager;
