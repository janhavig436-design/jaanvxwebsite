import React, { useState, useEffect } from 'react';
import { 
  Search, Bookmark, Moon, Sun, Menu, X, Clock, Heart, 
  Sparkles, Send, ArrowRight, Share2, MessageSquare, Trash2, CheckCircle2, Feather, Flame
} from 'lucide-react';

interface Author {
  name: string;
  avatar: string;
}

interface Comment {
  name: string;
  date: string;
  text: string;
}

interface Article {
  id: number;
  title: string;
  category: string;
  featured: boolean;
  image: string;
  date: string;
  readTime: string;
  author: Author;
  likes: number;
  excerpt: string;
  content: string;
  comments: Comment[];
}

const INITIAL_BLOGS: Article[] = [
  {
    id: 1,
    title: "The Copenhagen Street Style Playbook: Oversized Blazers, Pastels & Nordic Nonchalance",
    category: "Fashion",
    featured: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    date: "Oct 12, 2026",
    readTime: "11 min read",
    author: {
      name: "Chloe V.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    likes: 482,
    excerpt: "An exhaustive masterclass on mastering the Nordic nonchalant aesthetic with oversized pastel blazers, slouchy denim, chunky loafers, and TikTok-approved layering techniques.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">Copenhagen fashion week proved one undeniable truth: effortless tailoring meets pastel dreams is the ultimate uniform for the digital native navigating modern style.</p>
      
      <p>If your Pinterest board is currently drowning in oversized butter-yellow blazers, slouchy mom jeans, pastel knit balaclavas, and whimsical statement bags, you are already halfway to nailing the Nordic street style aesthetic. Scandinavian fashion has long championed functional minimalism, but in recent seasons, Copenhagen tastemakers have infused vibrant pastel hues and playful proportions into their wardrobe staples, sparking a global TikTok movement.</p>
      
      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">1. The Architecture of the Oversized Pastel Blazer</h3>
      <p>Gone are the days of stiff, corporate, perfectly fitted blazers. Gen-Z tastemakers and Scandinavian influencers are actively swapping neutrals for buttery cream, lavender, and mint silhouettes that drape effortlessly over graphic baby tees or ribbed tank tops. The secret lies in the shoulder seam: look for blazers that extend two to three inches past your natural shoulder line, creating that coveted slouchy, borrowed-from-the-boys silhouette.</p>
      <p>When styling an oversized pastel blazer, balance is paramount. Pair a voluminous lavender blazer with biker shorts and knee-high chunky boots for transitional weather, or layer it over a slip dress with vintage sneakers for an instant coffee-run ensemble.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">2. Footwear & Accessories: High-Low Juxtaposition</h3>
      <p>Nordic fashion thrives on unexpected pairings. You will rarely catch a Copenhagen style icon in head-to-toe polished heels. Instead, they pair baggy thrifted cargos with sleek ballet flats or chunky platform loafers. Accessories are treated as storytelling devices: layer chunky silver charm necklaces, add rimless tinted sunglasses, and wear over-ear headphones as a functional hair accessory.</p>
      
      <blockquote class="border-l-2 border-[#8B5CF6] pl-4 italic text-gray-600 dark:text-purple-200 my-4">"Fashion is what you're offered four times a year by designers. Style is what you choose to make of your own narrative." — Lauren Hutton</blockquote>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">3. Sustainable Thrifting & Deadstock Hunting</h3>
      <p>True Copenhagen style rejects fast-fashion knockoffs in favor of vintage treasure hunting. Spend your weekends scouring local flea markets and Depop for 90s deadstock wool coats, vintage leather trench coats, and men's tailored trousers. Tailoring is your best friend—taking a $15 oversized thrifted blazer to a local tailor for nip-and-tuck adjustments will yield a luxury-grade garment for a fraction of the cost.</p>
      
      <p>Ultimately, dressing like a Nordic fashion insider is about cultivating confidence in your comfort. When you stop dressing for external validation and start curating textures, colors, and silhouettes that make you feel invincible, your personal style unlocks its true potential.</p>
    `,
    comments: [
      { name: "Mia L.", date: "Oct 13, 2026", text: "The pastel blazer combo is literally my entire Pinterest feed right now! Obsessed with this deep dive." },
      { name: "Zoe K.", date: "Oct 13, 2026", text: "Taking thrifted blazers to a tailor is such a game changer tip. Doing this today!" }
    ]
  },
  {
    id: 2,
    title: "Skin Cycling & Slugging 101: The Ultimate TikTok Skincare & Barrier Repair Guide",
    category: "Beauty",
    featured: false,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    date: "Oct 10, 2026",
    readTime: "10 min read",
    author: {
      name: "Maya S.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    likes: 512,
    excerpt: "Stop wrecking your skin barrier with harsh, overlapping chemical actives. Here is the ultimate dermatologist-backed guide to skin cycling, barrier health, and slugging for glassy dewy skin.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">If your skincare vanity looks like a chemical laboratory and your skin feels perpetually tight, stinging, and irritated, it is time to embrace skin cycling.</p>
      
      <p>Popularized by board-certified dermatologist Dr. Whitney Bowe and viral across beauty TikTok, skin cycling is a structured 4-night rotational routine designed to maximize the efficacy of powerful active ingredients while giving your skin barrier adequate recovery time to regenerate and heal.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">The 4-Night Rotation Blueprint</h3>
      <p><strong>Night 1: Exfoliation.</strong> After gentle cleansing on dry skin, apply a chemical exfoliant containing glycolic, lactic, or salicylic acid. Exfoliation clears away dead skin cell buildup, unclogs pores, and creates a reflective canvas for subsequent hydration.</p>
      <p><strong>Night 2: Retinoid.</strong> Introduce your gold-standard retinoid (retinol, retinaldehyde, or prescription tretinoin). Retinoids accelerate cell turnover, stimulate collagen synthesis, and diminish fine lines and acne scarring. Always apply to completely dry skin to minimize irritation.</p>
      <p><strong>Nights 3 & 4: Recovery.</strong> Pause all actives entirely. These restorative nights are all about barrier nourishment. Layer hyaluronic acid on damp skin, followed by a ceramide-rich moisturizer and facial oils.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">What is Slugging and Who Is It For?</h3>
      <p>On your recovery nights, if your skin feels exceptionally dry or parched, you can practice "slugging"—the act of applying a thin layer of an occlusive ointment (like petroleum jelly or healing balms) as the final step of your nighttime routine. Occlusives prevent transepidermal water loss (TEWL) overnight, allowing your skin barrier to repair itself rapidly.</p>

      <blockquote class="border-l-2 border-[#8B5CF6] pl-4 italic text-gray-600 dark:text-purple-200 my-4">"Skincare is not about aggressive warfare against your face; it is a gentle negotiation with your skin barrier." — Dr. Whitney Bowe</blockquote>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Common Pitfalls to Avoid</h3>
      <p>Never mix vitamin C serums with direct retinoids on the same night unless formulated together. Always wear broad-spectrum SPF 50 sunscreen every single morning, as active cell turnover makes skin temporarily more sensitive to UV pigmentation.</p>
    `,
    comments: [
      { name: "Chloe R.", date: "Oct 11, 2026", text: "Skin cycling saved my skin barrier after years of over-exfoliating with harsh scrubs!" }
    ]
  },
  {
    id: 3,
    title: "Pinterest Board IRL: Curating Your Dream Soft-Pastel Room Aesthetic & Sanctuary",
    category: "Lifestyle",
    featured: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    date: "Oct 08, 2026",
    readTime: "9 min read",
    author: {
      name: "Hana N.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
    },
    likes: 384,
    excerpt: "Transform your bedroom and living space into a calming pastel dreamscape using cloud mirrors, LED sunset lamps, waffle knits, and dedicated matcha station corners.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">Your physical environment directly dictates your mental serenity. Transforming a chaotic room into a serene pastel sanctuary is the ultimate self-care ritual.</p>

      <p>Gen-Z interior design has pivoted away from stark industrial minimalism and sterile greys, leaning heavily into tactile warmth, whimsical curves, and soothing pastel color palettes. Whether you are living in a compact student dorm or a city apartment, creating a cozy aesthetic haven is entirely achievable with intentional curation.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">1. Master the Lighting Layer</h3>
      <p>Overhead fluorescent lighting is the ultimate mood killer. To cultivate an ethereal sanctuary, rely entirely on layered ambient lighting. Invest in pleated pastel table lamps, glowing orb lights, LED sunset projection lamps, and hand-poured soy wax candles scented with lavender and white tea.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">2. Whimsical Accents & Tactile Fabrics</h3>
      <p>Incorporate irregular cloud-shaped wall mirrors, checkered pastel rugs, bubble cube candles, and waffle-knit cotton throws. Mix textures—linen curtains against velvet pillows—to create depth and sensory richness in your space.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">3. The Dedicated Matcha & Coffee Bar</h3>
      <p>Designate a small corner of your dresser or desk as a aesthetic beverage station. Display ceramic ribbed mugs, a bamboo matcha whisk, glass carafes, and cute aesthetic jars filled with organic ceremonial matcha powder.</p>
    `,
    comments: []
  },
  {
    id: 4,
    title: "Matcha Lattes & Morning Gratitude: Slow Living Rituals in a Hyper-Connected World",
    category: "Wellness",
    featured: false,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    date: "Oct 05, 2026",
    readTime: "9 min read",
    author: {
      name: "Dr. Clara V.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    likes: 620,
    excerpt: "How mindful morning rituals, ceremonial grade matcha, breathwork, and strict phone-free hours are curing digital burnout and anxiety for Gen-Z.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">In a society addicted to notification pings and infinite scroll, reclaiming your quiet morning hours is the ultimate rebellion.</p>

      <p>Digital burnout has reached an all-time high, prompting a massive cultural shift toward slow living. Instead of waking up and immediately subjecting your nervous system to work emails and social media doom-scrolling, mindful individuals are establishing sacred morning boundaries.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">The 60-Minute Digital Sunset & Sunrise</h3>
      <p>Avoid touching your smartphone for the first 60 minutes after waking up. This crucial boundary allows your cortisol levels to regulate naturally without artificial spikes. Replace screen time with somatic stretching, journaling, and the meditative art of whisking ceremonial-grade Japanese matcha.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Why Matcha Over Coffee?</h3>
      <p>While coffee can trigger jittery heart palpitations and cortisol crashes due to sudden caffeine spikes, matcha contains L-theanine—an amino acid that promotes calm alertness, sustained focus, and steady energy throughout your morning workflow.</p>
    `,
    comments: [
      { name: "Sam P.", date: "Oct 06, 2026", text: "Switching from coffee to iced oat matcha was a game changer for my morning anxiety." }
    ]
  },
  {
    id: 5,
    title: "Vintage Thrift Flipping: How to Upcycle 90s Deadstock Into Runway-Ready Pieces",
    category: "Style",
    featured: false,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    date: "Oct 02, 2026",
    readTime: "10 min read",
    author: {
      name: "Chloe V.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    likes: 410,
    excerpt: "Turn thrift store oversized blazers and men's button-downs into custom Y2K corset tops, lace-up details, and asymmetric skirts with zero waste.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">Fast fashion is officially out; sustainable thrift flipping and DIY upcycling represent the pinnacle of modern personal style.</p>

      <p>Why buy mass-produced clothes from mega-retailers when you can create one-of-a-kind designer pieces from thrift store racks? With fabric shears, pastel ribbons, and basic sewing skills, you can breathe new life into forgotten garments.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">Top 4 Thrift Flip Projects for Beginners</h3>
      <p>1. <strong>The Corset Shirt:</strong> Transform an oversized men's dress shirt into a laced-up corset top using ribbon and eyelet pliers.<br>
      2. <strong>Asymmetric Miniskirts:</strong> Convert old pleated maxi skirts into trendy Y2K low-rise minis.<br>
      3. <strong>Ribbon Tie Straps:</strong> Add velvet bows to plain tank tops and cardigan shoulders.<br>
      4. <strong>Denim Patchwork Totes:</strong> Sew scraps of faded denim into stylish shoulder bags.</p>
    `,
    comments: []
  },
  {
    id: 6,
    title: "Clean Girl Makeup Meets Soft Grunge: The 2026 Beauty Paradox & Aesthetic",
    category: "Beauty",
    featured: false,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Maya S.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    likes: 360,
    excerpt: "Blending dewy glazed skin and laminated brows with smudged espresso eyeliner and glossy plum lips for the ultimate moody 2026 beauty paradox.",
    content: `
      <p class="lead font-serif text-lg italic text-[#8B5CF6] dark:text-[#D8B4FE]">The clean girl aesthetic has matured. We are now marrying glowing, featherlight skin with sultry 90s grunge eyes and espresso lips.</p>

      <p>This hybrid beauty trend allows you to enjoy the best of both worlds: skin that looks hydrated, fresh, and breathable paired with high-impact smudged eyeliner and deep berry tones that add instant attitude.</p>

      <h3 class="font-serif text-xl font-semibold mt-6 mb-2">How to Achieve the Look</h3>
      <p>Keep your complexion radiant with tinted serum, cream blush, and brushed-up laminated brows. For eyes, smudge a dark chocolate or espresso eyeliner along your lash line and blend outwards with a fluffy brush. Finish with a hydrating plum lip oil.</p>
    `,
    comments: []
  }
];

export default function App() {
  const [blogs, setBlogs] = useState<Article[]>(INITIAL_BLOGS);
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('vv_saved_articles') || '[]'); } catch { return []; }
  });
  const [likedIds, setLikedIds] = useState<number[]>(() => {
    try { return JSON.parse(localStorage.getItem('vv_liked_articles') || '[]'); } catch { return []; }
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('vv_theme') === 'dark' || (!('vv_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(false);

  // AI Advisor state
  const [aiMode, setAiMode] = useState<'style' | 'skincare' | 'outfit'>('style');
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSuccess, setNewsletterSuccess] = useState<boolean>(false);

  // Comment state
  const [commentName, setCommentName] = useState<string>('');
  const [commentEmail, setCommentEmail] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vv_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('vv_saved_articles', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('vv_liked_articles', JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleSave = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleLike = (id: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const isLiked = likedIds.includes(id);
    setLikedIds(prev => isLiked ? prev.filter(i => i !== id) : [...prev, id]);
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, likes: isLiked ? b.likes - 1 : b.likes + 1 } : b));
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesCat = currentCategory === 'All' || blog.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredBlog = blogs.find(b => b.featured) || blogs[0];
  const selectedArticle = blogs.find(b => b.id === selectedArticleId);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticleId || !commentName.trim() || !commentText.trim()) return;

    setBlogs(prev => prev.map(blog => {
      if (blog.id === selectedArticleId) {
        return {
          ...blog,
          comments: [
            { name: commentName.trim(), date: "Just now", text: commentText.trim() },
            ...blog.comments
          ]
        };
      }
      return blog;
    }));

    setCommentName('');
    setCommentEmail('');
    setCommentText('');
  };

  const handleAiConsult = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiPrompt;
    if (!promptToSend.trim()) return;

    setAiLoading(true);
    setAiResponse('');

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptToSend, mode: aiMode })
      });
      const data = await res.json();
      if (data.error) {
        setAiResponse(`Error: ${data.error}`);
      } else {
        setAiResponse(data.result);
      }
    } catch (err: any) {
      setAiResponse('Failed to connect to AI Advisor. Please verify server connection.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-[#1E1B24] text-[#2B2A33] dark:text-[#F3E8FF] transition-colors duration-300">
      
      {/* Top Pastel Banner */}
      <div className="bg-gradient-to-r from-[#EAE4F2] via-[#FAD2E1] to-[#E2ECE9] text-[#2B2A33] text-[11px] py-2 text-center tracking-widest uppercase font-medium shadow-sm transition-colors flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
        <span>Gen-Z Long-Form Pastel Issue &amp; AI Vibe Check — <button onClick={() => setIsAiModalOpen(true)} className="underline hover:text-[#7C3AED] font-semibold">Consult AI Vibe Stylist</button></span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 dark:bg-[#1E1B24]/90 border-b border-[#F0E6EF] dark:border-[#2D263B] backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-xs font-medium tracking-widest uppercase">
              {['All', 'Fashion', 'Beauty', 'Lifestyle', 'Wellness', 'Style'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCurrentCategory(cat)}
                  className={`hover:text-[#8B5CF6] transition-colors ${currentCategory === cat ? 'text-[#8B5CF6] font-semibold border-b-2 border-[#8B5CF6] pb-1' : ''}`}
                >
                  {cat === 'All' ? 'Home' : cat}
                </button>
              ))}
            </nav>

            {/* Editorial Logo */}
            <div className="flex-1 md:flex-none text-center">
              <button onClick={() => setCurrentCategory('All')} className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold italic hover:opacity-90 transition-opacity">
                Vogue <span className="text-[#8B5CF6] font-normal">&amp;</span> Velvet
              </button>
            </div>

            {/* Right Utility Bar */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* AI Vibe Stylist Button */}
              <button 
                onClick={() => setIsAiModalOpen(true)}
                className="hidden sm:flex items-center space-x-1.5 text-xs bg-[#EAE4F2] hover:bg-[#DDD6FE] text-[#7C3AED] px-3.5 py-2 rounded-full font-medium tracking-wider uppercase transition-all border border-[#DDD6FE]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Vibe Stylist</span>
              </button>

              {/* Search Field */}
              <div className="relative hidden sm:block">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search aesthetics..." 
                  className="bg-[#F3E8FF]/40 dark:bg-[#2D263B] text-xs rounded-full py-2 pl-9 pr-4 w-36 lg:w-48 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] transition-all border border-transparent dark:border-gray-700"
                />
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
              </div>

              {/* Bookmarks Toggle */}
              <button onClick={() => setIsSavedDrawerOpen(true)} className="p-2 rounded-full hover:bg-[#F3E8FF]/60 dark:hover:bg-[#2D263B] transition-colors relative" title="Saved Reading List">
                <Bookmark className="w-5 h-5 text-[#8B5CF6]" />
                {savedIds.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8B5CF6] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {savedIds.length}
                  </span>
                )}
              </button>

              {/* Theme Switcher */}
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[#F3E8FF]/60 dark:hover:bg-[#2D263B] transition-colors" title="Toggle Mode">
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-[#8B5CF6]" />}
              </button>

              {/* Mobile Menu Hamburger */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[#F3E8FF]/60 dark:hover:bg-[#2D263B]">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        <div className="sm:hidden px-4 pb-3">
          <div className="relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search editorial stories..." 
              className="w-full bg-[#F3E8FF]/40 dark:bg-[#2D263B] text-xs rounded-full py-2.5 pl-9 pr-4 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6] border border-transparent dark:border-gray-700"
            />
            <Search className="absolute left-3.5 top-3 w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F6] dark:bg-[#1E1B24] border-b border-[#F0E6EF] dark:border-[#2D263B] px-4 py-4 space-y-3 text-center text-xs tracking-widest uppercase">
            <button onClick={() => { setIsAiModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full py-2 text-[#8B5CF6] font-semibold flex items-center justify-center space-x-1">
              <Sparkles className="w-4 h-4" /> <span>AI Vibe Stylist</span>
            </button>
            {['All', 'Fashion', 'Beauty', 'Lifestyle', 'Wellness', 'Style'].map(cat => (
              <button key={cat} onClick={() => { setCurrentCategory(cat); setIsMobileMenuOpen(false); }} className="block w-full py-2 hover:text-[#8B5CF6]">
                {cat === 'All' ? 'Home' : cat}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        {currentCategory === 'All' && !searchQuery && featuredBlog && (
          <section className="mb-14">
            <div className="relative bg-white dark:bg-[#252131] rounded-3xl overflow-hidden border border-[#F0E6EF] dark:border-gray-800 shadow-xl group transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
                <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-full">
                  <img src={featuredBlog.image} alt={featuredBlog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent lg:hidden"></div>
                  <span className="absolute top-4 left-4 bg-[#8B5CF6] text-white text-[10px] uppercase tracking-widest font-semibold px-3.5 py-1.5 rounded-full shadow">
                    Featured {featuredBlog.category}
                  </span>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-purple-300">
                      <span>{featuredBlog.date}</span>
                      <span>•</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {featuredBlog.readTime}</span>
                    </div>

                    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold italic leading-tight group-hover:text-[#8B5CF6] transition-colors cursor-pointer" onClick={() => setSelectedArticleId(featuredBlog.id)}>
                      {featuredBlog.title}
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-purple-200/80 line-clamp-3 leading-relaxed">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0E6EF] dark:border-gray-800 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src={featuredBlog.author.avatar} alt={featuredBlog.author.name} className="w-9 h-9 rounded-full object-cover border border-[#8B5CF6]" />
                      <span className="text-xs font-medium">{featuredBlog.author.name}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button onClick={(e) => toggleSave(featuredBlog.id, e)} className="p-2.5 rounded-full hover:bg-[#F3E8FF] dark:hover:bg-[#1E1B24] transition-colors">
                        <Bookmark className={`w-4 h-4 ${savedIds.includes(featuredBlog.id) ? 'text-[#8B5CF6] fill-current' : ''}`} />
                      </button>
                      <button onClick={() => setSelectedArticleId(featuredBlog.id)} className="bg-[#2B2A33] dark:bg-[#F3E8FF] text-[#FAF9F6] dark:text-[#2B2A33] hover:bg-[#8B5CF6] dark:hover:bg-[#8B5CF6] dark:hover:text-white text-xs px-5 py-2.5 rounded-full font-medium tracking-wider uppercase transition-all">
                        Read Story
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Editorial Grid Section */}
        <section id="blogs-grid" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#F0E6EF] dark:border-[#2D263B] pb-4 mb-8 gap-4">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold italic">Editorial Journal</h2>
              <p className="text-xs text-gray-500 dark:text-purple-300 mt-1">In-depth pastel aesthetics, TikTok skincare secrets, and mindful slow living</p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Fashion', 'Beauty', 'Lifestyle', 'Wellness', 'Style'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setCurrentCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-full font-medium tracking-wider uppercase transition-all ${
                    currentCategory === cat 
                      ? 'bg-[#8B5CF6] text-white shadow-sm' 
                      : 'bg-[#F0E6EF]/70 text-[#2B2A33] dark:bg-[#252131] dark:text-purple-200 hover:bg-[#EAE4F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Filter Notice */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between bg-[#EAE4F2] text-[#7C3AED] dark:bg-[#2D263B] dark:text-purple-300 px-4 py-2.5 rounded-xl text-xs">
              <span>Filtered by query: <strong className="font-semibold">{searchQuery}</strong></span>
              <button onClick={() => setSearchQuery('')} className="underline hover:opacity-80">Reset Search</button>
            </div>
          )}

          {/* Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <Feather className="w-12 h-12 text-[#DDD6FE] dark:text-[#2D263B] mx-auto mb-3" />
              <h3 className="font-serif text-xl font-semibold">No stories match your criteria</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Try tweaking your search term or exploring another category.</p>
              <button onClick={() => { setSearchQuery(''); setCurrentCategory('All'); }} className="mt-4 text-xs bg-[#8B5CF6] text-white px-5 py-2 rounded-full uppercase tracking-wider">
                Show All Stories
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map(blog => {
                const isSaved = savedIds.includes(blog.id);
                const isLiked = likedIds.includes(blog.id);

                return (
                  <article key={blog.id} className="bg-white dark:bg-[#252131] rounded-3xl overflow-hidden border border-[#F0E6EF] dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden cursor-pointer" onClick={() => setSelectedArticleId(blog.id)}>
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                        <span className="absolute top-3 left-3 bg-[#FAF9F6]/90 dark:bg-[#1E1B24]/90 text-[#2B2A33] dark:text-[#F3E8FF] text-[10px] uppercase font-semibold tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                          {blog.category}
                        </span>
                        <button onClick={(e) => toggleSave(blog.id, e)} className="absolute top-3 right-3 p-2 rounded-full bg-[#FAF9F6]/80 dark:bg-[#1E1B24]/80 text-[#2B2A33] dark:text-[#F3E8FF] hover:text-[#8B5CF6] backdrop-blur-sm transition-colors">
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-[#8B5CF6] fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-purple-300">
                          <span>{blog.date}</span>
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {blog.readTime}</span>
                        </div>

                        <h3 className="font-serif text-xl font-semibold italic leading-snug group-hover:text-[#8B5CF6] transition-colors cursor-pointer" onClick={() => setSelectedArticleId(blog.id)}>
                          {blog.title}
                        </h3>

                        <p className="text-xs text-gray-600 dark:text-purple-200/80 line-clamp-2 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-[#F0E6EF] dark:border-gray-800 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <img src={blog.author.avatar} alt={blog.author.name} className="w-7 h-7 rounded-full object-cover border border-[#8B5CF6]" />
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-[11px]">{blog.author.name}</span>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                        <button onClick={(e) => toggleLike(blog.id, e)} className="hover:text-rose-500 transition-colors flex items-center space-x-1">
                          <Heart className={`w-4 h-4 ${isLiked ? 'text-rose-500 fill-current' : ''}`} />
                          <span className="text-[11px]">{blog.likes}</span>
                        </button>
                        <button onClick={() => setSelectedArticleId(blog.id)} className="text-[#8B5CF6] font-semibold hover:underline text-[11px] uppercase tracking-wider">
                          Read Long-Form →
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="my-16 bg-gradient-to-br from-[#EAE4F2] via-[#FAD2E1] to-[#E2ECE9] dark:from-[#252131] dark:to-[#2D263B] rounded-3xl p-8 md:p-12 text-center border border-[#F0E6EF] dark:border-gray-800 shadow-sm">
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#7C3AED] dark:text-purple-300 font-semibold">The Velvet Club</span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold italic">Pastel Aesthetic Edits Delivered Weekly</h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-purple-200 leading-relaxed">
              Subscribe to receive tailored outfit moodboards, skincare cheat sheets, and room decor inspiration directly to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <input 
                type="email" 
                required 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full sm:flex-1 text-xs py-3.5 px-5 rounded-full bg-white dark:bg-[#1E1B24] text-[#2B2A33] dark:text-white border border-[#E8D8D0] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
              />
              <button type="submit" className="w-full sm:w-auto bg-[#2B2A33] dark:bg-[#F3E8FF] text-[#FAF9F6] dark:text-[#2B2A33] hover:bg-[#8B5CF6] dark:hover:bg-[#8B5CF6] dark:hover:text-white text-xs font-medium uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shadow">
                Join Newsletter
              </button>
            </form>
            {newsletterSuccess && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium pt-1 flex items-center justify-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" /> <span>Welcome! You are officially subscribed to Vogue &amp; Velvet.</span>
              </p>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#252131] border-t border-[#F0E6EF] dark:border-gray-800 pt-12 pb-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#F0E6EF] dark:border-gray-800">
            <div className="md:col-span-2 space-y-4">
              <span className="font-serif text-2xl font-semibold italic">Vogue <span className="text-[#8B5CF6]">&amp;</span> Velvet</span>
              <p className="text-xs text-gray-500 dark:text-purple-300 leading-relaxed max-w-sm">
                A modern digital publication dedicated to high fashion, conscious beauty rituals, wellness routines, and pastel aesthetic lifestyle design.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500 dark:text-purple-300 pt-2">
                <a href="#" className="hover:text-[#8B5CF6] transition-colors"><i className="fa-brands fa-instagram text-lg"></i></a>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors"><i className="fa-brands fa-pinterest text-lg"></i></a>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors"><i className="fa-brands fa-tiktok text-lg"></i></a>
                <a href="#" className="hover:text-[#8B5CF6] transition-colors"><i className="fa-brands fa-x-twitter text-lg"></i></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-3">Categories</h4>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-purple-300">
                <li><button onClick={() => { setCurrentCategory('Fashion'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="hover:text-[#8B5CF6]">Fashion Trends</button></li>
                <li><button onClick={() => { setCurrentCategory('Beauty'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="hover:text-[#8B5CF6]">Skincare &amp; Beauty</button></li>
                <li><button onClick={() => { setCurrentCategory('Lifestyle'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="hover:text-[#8B5CF6]">Mindful Living</button></li>
                <li><button onClick={() => { setCurrentCategory('Wellness'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="hover:text-[#8B5CF6]">Holistic Wellness</button></li>
                <li><button onClick={() => { setCurrentCategory('Style'); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="hover:text-[#8B5CF6]">Personal Style</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] mb-3">Editorial Info</h4>
              <ul className="space-y-2 text-xs text-gray-500 dark:text-purple-300">
                <li><button onClick={() => alert('Vogue & Velvet was founded as a premier lifestyle publication in 2026.')} className="hover:text-[#8B5CF6]">About Our Vision</button></li>
                <li><button onClick={() => alert('Inquiries: press@vogueandvelvet.com')} className="hover:text-[#8B5CF6]">Press &amp; Partnerships</button></li>
                <li><button onClick={() => alert('Privacy Policy: User data is protected and kept secure.')} className="hover:text-[#8B5CF6]">Privacy &amp; Terms</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>&copy; 2026 Vogue &amp; Velvet Editorial. All rights reserved.</p>
            <p className="italic">Designed for pastel dreamers &amp; digital natives</p>
          </div>
        </div>
      </footer>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1B24]/80 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6">
          <div className="bg-[#FAF9F6] dark:bg-[#1E1B24] text-[#2B2A33] dark:text-[#F3E8FF] w-full max-w-4xl rounded-none sm:rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col min-h-screen sm:min-h-0 max-h-none sm:max-h-[92vh] relative">
            
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-[#FAF9F6]/90 dark:bg-[#1E1B24]/90 backdrop-blur-md px-6 py-4 border-b border-[#F0E6EF] dark:border-gray-800 flex items-center justify-between">
              <span className="text-[10px] uppercase font-semibold tracking-widest px-3 py-1 bg-[#8B5CF6] text-white rounded-full">
                {selectedArticle.category}
              </span>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => toggleLike(selectedArticle.id)}
                  className="p-2 rounded-full hover:bg-[#F3E8FF] dark:hover:bg-[#252131] transition-colors flex items-center space-x-1.5 text-xs"
                >
                  <Heart className={`w-4 h-4 ${likedIds.includes(selectedArticle.id) ? 'text-rose-500 fill-current' : ''}`} />
                  <span>{selectedArticle.likes}</span>
                </button>
                <button 
                  onClick={() => toggleSave(selectedArticle.id)}
                  className="p-2 rounded-full hover:bg-[#F3E8FF] dark:hover:bg-[#252131] transition-colors"
                >
                  <Bookmark className={`w-4 h-4 ${savedIds.includes(selectedArticle.id) ? 'text-[#8B5CF6] fill-current' : ''}`} />
                </button>
                <button onClick={() => setSelectedArticleId(null)} className="p-2 rounded-full hover:bg-[#F3E8FF] dark:hover:bg-[#252131] transition-colors text-gray-500 hover:text-[#2B2A33] dark:hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Scroll Body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-6 flex-grow">
              <div className="space-y-4 max-w-3xl mx-auto text-center">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold italic leading-tight">
                  {selectedArticle.title}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-purple-300 pt-2">
                  <div className="flex items-center space-x-2">
                    <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-8 h-8 rounded-full object-cover border border-[#8B5CF6]" />
                    <span className="font-medium text-[#2B2A33] dark:text-[#F3E8FF]">{selectedArticle.author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg my-6 max-h-[480px]">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              {/* HTML Content */}
              <div 
                className="prose max-w-2xl mx-auto text-sm sm:text-base text-[#2B2A33] dark:text-purple-200/90 leading-relaxed space-y-5 font-normal"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              {/* Author Bio */}
              <div className="max-w-2xl mx-auto my-8 p-6 bg-[#F0E6EF]/50 dark:bg-[#252131] rounded-2xl border border-[#F0E6EF] dark:border-gray-800 flex items-center space-x-4">
                <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#8B5CF6]" />
                <div>
                  <h4 className="font-serif font-semibold text-sm sm:text-base">{selectedArticle.author.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-purple-300 mt-0.5">Senior Editorial Writer at Vogue &amp; Velvet. Passionate about pastel aesthetics, digital curation, and slow living.</p>
                </div>
              </div>

              <hr className="border-[#F0E6EF] dark:border-gray-800 max-w-2xl mx-auto" />

              {/* Comments Section */}
              <section className="max-w-2xl mx-auto pt-4 space-y-6">
                <h3 className="font-serif text-xl font-semibold italic">Reader Comments ({selectedArticle.comments.length})</h3>

                <form onSubmit={handleAddComment} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      required 
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      placeholder="Your Name" 
                      className="text-xs p-3 rounded-xl bg-white dark:bg-[#252131] border border-[#F0E6EF] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                    />
                    <input 
                      type="email" 
                      required 
                      value={commentEmail}
                      onChange={(e) => setCommentEmail(e.target.value)}
                      placeholder="Your Email (Private)" 
                      className="text-xs p-3 rounded-xl bg-white dark:bg-[#252131] border border-[#F0E6EF] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                    />
                  </div>
                  <textarea 
                    rows={3} 
                    required 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Share your aesthetic thoughts on this story..." 
                    className="w-full text-xs p-3 rounded-xl bg-white dark:bg-[#252131] border border-[#F0E6EF] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                  ></textarea>
                  <button type="submit" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs px-6 py-2.5 rounded-full font-medium tracking-wider uppercase transition-colors">
                    Submit Comment
                  </button>
                </form>

                <div className="space-y-4 pt-2">
                  {selectedArticle.comments.length === 0 ? (
                    <p className="text-xs text-gray-400 italic">No comments yet. Be the first to join the aesthetic discussion!</p>
                  ) : (
                    selectedArticle.comments.map((c, idx) => (
                      <div key={idx} className="bg-[#F0E6EF]/40 dark:bg-[#252131] p-4 rounded-2xl border border-[#F0E6EF] dark:border-gray-800 space-y-1">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-[#7C3AED] dark:text-purple-300 font-semibold">{c.name}</span>
                          <span className="text-gray-400 text-[10px]">{c.date}</span>
                        </div>
                        <p className="text-xs text-[#2B2A33] dark:text-purple-200 leading-relaxed">{c.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </section>

            </div>
          </div>
        </div>
      )}

      {/* AI Vibe Stylist Modal */}
      {isAiModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1B24]/85 backdrop-blur-md flex justify-center p-4 sm:p-6">
          <div className="bg-[#FAF9F6] dark:bg-[#1E1B24] text-[#2B2A33] dark:text-[#F3E8FF] w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
            
            <div className="px-6 py-4 border-b border-[#F0E6EF] dark:border-gray-800 flex items-center justify-between bg-[#EAE4F2]/50 dark:bg-[#252131]">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
                <h3 className="font-serif text-lg font-semibold italic">Vogue &amp; Velvet AI Vibe &amp; Pastel Stylist</h3>
              </div>
              <button onClick={() => setIsAiModalOpen(false)} className="p-2 rounded-full hover:bg-[#F3E8FF] dark:hover:bg-[#252131]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto flex-grow">
              <div className="flex space-x-2">
                {(['style', 'skincare', 'outfit'] as const).map(mode => (
                  <button 
                    key={mode}
                    onClick={() => setAiMode(mode)}
                    className={`flex-1 py-2 text-xs uppercase tracking-wider rounded-xl font-semibold transition-all ${
                      aiMode === mode 
                        ? 'bg-[#8B5CF6] text-white shadow' 
                        : 'bg-[#F0E6EF]/70 dark:bg-[#252131] text-gray-600 dark:text-purple-300'
                    }`}
                  >
                    {mode === 'style' ? 'Aesthetic Edit' : mode === 'skincare' ? 'Skin Cycling' : 'OOTD Vibe'}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-purple-300">Quick Gen-Z Prompt Ideas:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Give me a Copenhagen pastel streetwear outfit formula",
                    "How to start skin cycling for sensitive skin",
                    "Aesthetic Pinterest room decor checklist under $50",
                    "Slow morning routine with matcha for zero anxiety"
                  ].map((chip, i) => (
                    <button 
                      key={i} 
                      onClick={() => { setAiPrompt(chip); handleAiConsult(chip); }}
                      className="text-[11px] bg-[#F0E6EF]/50 dark:bg-[#252131] hover:bg-[#8B5CF6] hover:text-white px-3 py-2 rounded-xl transition-colors text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <textarea 
                  rows={3}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Ask your AI fashion editor about trends, skin cycling, or aesthetic vibes..." 
                  className="w-full text-xs p-3.5 rounded-2xl bg-white dark:bg-[#252131] border border-[#F0E6EF] dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                ></textarea>
                <button 
                  onClick={() => handleAiConsult()}
                  disabled={aiLoading}
                  className="w-full bg-[#2B2A33] dark:bg-[#F3E8FF] text-[#FAF9F6] dark:text-[#2B2A33] hover:bg-[#8B5CF6] dark:hover:bg-[#8B5CF6] dark:hover:text-white text-xs font-medium uppercase tracking-widest py-3 rounded-full transition-all flex items-center justify-center space-x-2 shadow"
                >
                  {aiLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      <span>Consulting AI Vibe Stylist...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Vibe Check</span>
                    </>
                  )}
                </button>
              </div>

              {aiResponse && (
                <div className="mt-4 p-5 bg-[#EAE4F2]/50 dark:bg-[#252131] rounded-2xl border border-[#F0E6EF] dark:border-gray-800 space-y-2">
                  <h4 className="font-serif text-sm font-semibold text-[#8B5CF6] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" /> <span>AI Vibe Stylist Recommendation</span>
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Saved Articles Drawer */}
      {isSavedDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#1E1B24]/60 backdrop-blur-sm flex justify-end">
          <div className="bg-[#FAF9F6] dark:bg-[#1E1B24] w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0E6EF] dark:border-gray-800">
                <h3 className="font-serif text-xl font-semibold italic">Saved Reading List</h3>
                <button onClick={() => setIsSavedDrawerOpen(false)} className="p-2 text-gray-500 hover:text-[#2B2A33] dark:hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="divide-y divide-[#F0E6EF] dark:divide-gray-800 py-4 space-y-4">
                {savedIds.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-8">Your saved list is empty. Click the bookmark icon on any post to save stories.</p>
                ) : (
                  blogs.filter(b => savedIds.includes(b.id)).map(blog => (
                    <div key={blog.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center space-x-3 overflow-hidden cursor-pointer" onClick={() => { setIsSavedDrawerOpen(false); setSelectedArticleId(blog.id); }}>
                        <img src={blog.image} alt={blog.title} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                        <div className="overflow-hidden">
                          <h4 className="font-serif text-xs font-semibold truncate hover:text-[#8B5CF6]">{blog.title}</h4>
                          <p className="text-[10px] text-gray-400">{blog.category} • {blog.readTime}</p>
                        </div>
                      </div>
                      <button onClick={() => toggleSave(blog.id)} className="text-gray-400 hover:text-rose-500 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="pt-4 border-t border-[#F0E6EF] dark:border-gray-800 text-center">
              <button onClick={() => setIsSavedDrawerOpen(false)} className="text-xs uppercase tracking-widest text-[#8B5CF6] hover:underline">
                Return To Journal
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
