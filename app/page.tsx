cat > src/pages/index.js << 'EOF'
import CareerDiscoveryPlatform from '../components/CareerDiscoveryPlatform';

export default function Home() {
  return (
    <div>
      <CareerDiscoveryPlatform />
    </div>
  );
}
EOF
