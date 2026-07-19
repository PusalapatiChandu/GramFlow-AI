import React from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { FinancialAnalysisModule } from './pages/modules/FinancialAnalysisModule';
import { AiIntelligenceModule } from './pages/modules/AiIntelligenceModule';
import { ClimateMarketModule } from './pages/modules/ClimateMarketModule';
import { LoansSchemesModule } from './pages/modules/LoansSchemesModule';
import { SimulatorModule } from './pages/modules/SimulatorModule';
import { ReportsModule } from './pages/modules/ReportsModule';
import { SettingsModule } from './pages/modules/SettingsModule';
import { VoiceAssistantPage } from './pages/VoiceAssistantPage'; // Keeping as standalone for the FAB
import { OcrScannerPage } from './pages/OcrScannerPage'; // Will be triggered from Dashboard or Reports

function App() {
  const [activePage, setActivePage] = React.useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard onNavigate={setActivePage} />;
      case 'financial': return <FinancialAnalysisModule />;
      case 'intelligence': return <AiIntelligenceModule />;
      case 'climate': return <ClimateMarketModule />;
      case 'loans': return <LoansSchemesModule />;
      case 'simulator': return <SimulatorModule />;
      case 'reports': return <ReportsModule />;
      case 'settings': return <SettingsModule />;
      case 'voice': return <VoiceAssistantPage />;
      case 'ocr': return <OcrScannerPage />;
      default: return <Dashboard onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <AppLayout activePage={activePage} onNavigate={setActivePage}>
        {renderPage()}
      </AppLayout>
    </div>
  );
}

export default App;
