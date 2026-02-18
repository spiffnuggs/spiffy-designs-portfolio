import React, { useState } from 'react';

export default function BerberWaveMockup() {
  const [activeTab, setActiveTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  
  const orange = '#E07A3D';
  const darkBg = '#1a1a1a';
  const cream = '#FDF8F3';

  return (
    <div style={{ 
      fontFamily: "'Segoe UI', -apple-system, sans-serif", 
      background: cream, 
      minHeight: '100vh',
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      
      {/* Mobile-First Navigation */}
      <nav style={{ 
        background: 'white', 
        padding: '12px 16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: `linear-gradient(180deg, ${orange} 0%, #c66a2d 100%)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '18px' }}>🌊</span>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#333', lineHeight: 1.1 }}>BERBER WAVES</div>
            <div style={{ fontSize: '8px', color: '#888', letterSpacing: '1.5px' }}>MOROCCO</div>
          </div>
        </div>
        
        {/* Hamburger Menu */}
        <div 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '4px', 
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <div style={{ width: '22px', height: '2px', background: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '22px', height: '2px', background: '#333', borderRadius: '2px' }}></div>
          <div style={{ width: '22px', height: '2px', background: '#333', borderRadius: '2px' }}></div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'white',
          padding: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          zIndex: 99
        }}>
          {['Surf & Yoga', 'Accommodation', 'Activities', 'About'].map(item => (
            <div key={item} style={{ padding: '15px 0', borderBottom: '1px solid #eee', color: '#333', fontSize: '16px' }}>{item}</div>
          ))}
          <button style={{
            width: '100%',
            marginTop: '20px',
            background: orange,
            color: 'white',
            border: 'none',
            padding: '15px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Book Now ✨
          </button>
        </div>
      )}

      {/* Hero Section - Mobile Optimized */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80" 
          alt="Surfing"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }}
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
        }}/>
        
        {/* Moroccan Pattern Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0 L50 25 L25 50 L0 25 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3Ccircle cx='25' cy='25' r='8' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }}/>
        
        {/* Hero Content */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          color: 'white',
          padding: '0 24px',
          maxWidth: '100%'
        }}>
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '3px', 
            marginBottom: '16px',
            color: orange,
            fontWeight: '600'
          }}>
            STAY · BREATHE · BELONG
          </div>
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '300', 
            marginBottom: '12px',
            textShadow: '2px 2px 20px rgba(0,0,0,0.4)',
            lineHeight: 1.1
          }}>
            Surf & Yoga
          </h1>
          <p style={{ 
            fontSize: '16px', 
            opacity: 0.95, 
            marginBottom: '32px',
            fontWeight: '300',
            maxWidth: '280px',
            margin: '0 auto 32px'
          }}>
            Find your flow on Morocco's best waves
          </p>
          <button style={{ 
            background: orange, 
            color: 'white', 
            border: 'none', 
            padding: '16px 40px', 
            fontSize: '15px', 
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: '0 4px 25px rgba(224, 122, 61, 0.5)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            Book Your Retreat <span style={{ fontSize: '18px' }}>→</span>
          </button>
          
          {/* Scroll indicator */}
          <div style={{ 
            marginTop: '50px', 
            opacity: 0.7,
            animation: 'bounce 2s infinite'
          }}>
            <div style={{ fontSize: '12px', marginBottom: '8px' }}>Scroll to explore</div>
            <div style={{ fontSize: '20px' }}>↓</div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Mobile */}
      <section style={{ 
        background: 'white', 
        padding: '24px 16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>
        {[
          { icon: '⭐', text: '4.9 on Google' },
          { icon: '🏄', text: '500+ Guests' },
          { icon: '🧘', text: 'ISA Certified' },
          { icon: '📍', text: 'Taghazout' }
        ].map((item, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <span style={{ fontSize: '13px', color: '#555' }}>{item.text}</span>
          </div>
        ))}
      </section>

      {/* Packages Section - Mobile */}
      <section style={{ padding: '50px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ color: orange, fontSize: '11px', letterSpacing: '2px', marginBottom: '8px', fontWeight: '600' }}>
            ✨ PACKAGES
          </div>
          <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '10px', fontWeight: '400' }}>
            Surf & Yoga Retreats
          </h2>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: 1.6, maxWidth: '300px', margin: '0 auto' }}>
            Color, rhythm, and waves — exactly what you'll find here.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { title: '5-Day Retreat', price: '€299', tag: 'POPULAR', desc: 'Perfect intro to surf & yoga', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
            { title: '7-Day Retreat', price: '€449', tag: 'BEST VALUE', desc: 'Deep immersion experience', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80' },
            { title: 'Private Lessons', price: '€59', tag: 'PER SESSION', desc: 'One-on-one instruction', img: 'https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?w=600&q=80' }
          ].map((pkg, i) => (
            <div key={i} style={{ 
              background: 'white', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={pkg.img} 
                  alt={pkg.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: orange,
                  color: 'white',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px'
                }}>
                  {pkg.tag}
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '4px', color: '#333' }}>{pkg.title}</h3>
                <p style={{ color: '#888', fontSize: '13px', marginBottom: '12px' }}>{pkg.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', color: orange }}>{pkg.price}</span>
                  <span style={{ 
                    color: orange, 
                    fontWeight: '600', 
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    Details <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Nomad Section - Mobile */}
      <section style={{ 
        background: darkBg, 
        padding: '50px 16px',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%23E07A3D' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}/>
        
        <div style={{ position: 'relative', color: 'white', textAlign: 'center' }}>
          <div style={{ color: orange, fontSize: '11px', letterSpacing: '2px', marginBottom: '12px', fontWeight: '600' }}>
            DIGITAL NOMAD FRIENDLY
          </div>
          <h2 style={{ fontSize: '26px', marginBottom: '16px', fontWeight: '400' }}>
            Your Office by the Ocean
          </h2>
          
          <div style={{ 
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '20px'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="Workspace"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
          </div>
          
          <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '14px', marginBottom: '24px' }}>
            Fast WiFi. Ocean breeze. Endless inspiration. The balance digital nomads crave.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['⚡ 100 Mbps WiFi', '🏖️ Ocean Terrace', '☕ Free Coffee'].map(item => (
              <span key={item} style={{ 
                background: 'rgba(224,122,61,0.15)', 
                padding: '10px 16px', 
                borderRadius: '25px',
                fontSize: '13px',
                color: orange
              }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section - Mobile */}
      <section style={{ padding: '50px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ color: orange, fontSize: '11px', letterSpacing: '2px', marginBottom: '8px', fontWeight: '600' }}>
            ✨ ACCOMMODATION
          </div>
          <h2 style={{ fontSize: '26px', color: '#333', fontWeight: '400' }}>
            Come as a guest, leave as family
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          {['all', 'shared', 'private'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '25px',
                background: activeTab === tab ? orange : 'white',
                color: activeTab === tab ? 'white' : '#666',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '13px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'Double Room', type: 'private', price: '€45', features: ['Ocean View', 'Private Bath'], img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80' },
            { name: '5-Person Shared', type: 'shared', price: '€25', features: ['Cozy Bunks', 'Social Vibe'], img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80' }
          ].map((room, i) => (
            <div key={i} style={{ 
              background: 'white', 
              borderRadius: '20px', 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              display: 'flex',
              height: '140px'
            }}>
              <div style={{ width: '40%', overflow: 'hidden' }}>
                <img 
                  src={room.img}
                  alt={room.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ 
                    display: 'inline-block',
                    background: room.type === 'private' ? '#E8F5E9' : '#FFF3E0',
                    color: room.type === 'private' ? '#2E7D32' : orange,
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    {room.type.toUpperCase()}
                  </div>
                  <h3 style={{ fontSize: '15px', marginBottom: '4px', color: '#333' }}>{room.name}</h3>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {room.features.map(f => (
                      <span key={f} style={{ fontSize: '10px', color: '#888' }}>{f}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: orange }}>{room.price}</span>
                    <span style={{ fontSize: '11px', color: '#888' }}>/night</span>
                  </div>
                  <button style={{
                    background: orange,
                    color: 'white',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '11px'
                  }}>
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews - Mobile */}
      <section style={{ background: 'white', padding: '50px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ color: '#FBBC04', fontSize: '20px', marginBottom: '4px' }}>★★★★★</div>
          <div style={{ fontSize: '13px', color: '#666' }}>
            <span style={{ fontWeight: '600' }}>EXCELLENT</span> · 19 reviews on <span style={{ color: '#4285F4', fontWeight: '600' }}>Google</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: 'Sarah M.', text: 'The location is truly charming, and the staff are exceptionally kind. The view is breathtaking!' },
            { name: 'Pierre B.', text: 'Super séjour! Ambiance conviviale, chambres propres. La terrasse offre une vue incroyable!' }
          ].map((review, i) => (
            <div key={i} style={{ 
              background: '#FAFAFA', 
              padding: '20px', 
              borderRadius: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ 
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  background: `linear-gradient(135deg, ${orange} 0%, #c66a2d 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#333', fontSize: '14px' }}>{review.name}</div>
                  <div style={{ color: '#FBBC04', fontSize: '11px' }}>★★★★★</div>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: 1.6, fontSize: '13px', margin: 0 }}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - Mobile */}
      <section style={{ 
        position: 'relative',
        padding: '60px 24px',
        textAlign: 'center'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800&q=80"
          alt="Sunset"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(224, 122, 61, 0.92) 0%, rgba(180, 90, 40, 0.92) 100%)`
        }}/>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '28px', color: 'white', marginBottom: '12px', fontWeight: '400' }}>
            Ready to ride the waves? ✨
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '24px', fontSize: '15px' }}>
            Book your Moroccan adventure today
          </p>
          <button style={{
            background: 'white',
            color: orange,
            border: 'none',
            padding: '16px 40px',
            fontSize: '15px',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: '700',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            Check Availability →
          </button>
        </div>
      </section>

      {/* Footer - Mobile */}
      <footer style={{ background: darkBg, padding: '40px 16px 100px', color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ 
              width: '36px', 
              height: '36px', 
              background: orange,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              🌊
            </div>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>BERBER WAVES</div>
              <div style={{ fontSize: '9px', color: '#888' }}>MOROCCO</div>
            </div>
          </div>
          <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
            Your home away from home on Morocco's beautiful Atlantic coast ✨
          </p>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ color: '#888', fontSize: '13px', lineHeight: 2 }}>
            <div>📍 Hay Rue Ait Soual, Tamraght</div>
            <div>📱 +212 6 64 67 47 43</div>
            <div>✉️ info@berberwavesmorocco.com</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          {['📸', '👤'].map((icon, i) => (
            <div key={i} style={{ 
              width: '44px', 
              height: '44px', 
              background: '#333',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}>
              {icon}
            </div>
          ))}
        </div>
        
        <div style={{ 
          borderTop: '1px solid #333', 
          paddingTop: '20px', 
          textAlign: 'center',
          color: '#555',
          fontSize: '11px'
        }}>
          © 2025 Berber Waves Morocco 🌊
        </div>
      </footer>

      {/* Floating Contact Button - Mobile Optimized */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '16px',
        left: '16px',
        background: `linear-gradient(135deg, ${orange} 0%, #c66a2d 100%)`,
        color: 'white',
        padding: '16px 24px',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: '600',
        boxShadow: '0 4px 25px rgba(224, 122, 61, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        zIndex: 1000,
        fontSize: '15px'
      }}>
        💬 Contact Us — We're here to help!
      </div>
    </div>
  );
}
