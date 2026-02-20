import React, { useMemo, useState } from 'react';

type Network = {
  id: string;
  label: string;
  glyph: string;
};

type Service = {
  id: number;
  network: string;
  title: string;
  min: number;
  max: number;
  startTime: string;
  speed: string;
  avgTime: string;
  pricePerThousand: number;
};

type Order = {
  id: number;
  service: string;
  quantity: number;
  link: string;
  charge: number;
};

const networks: Network[] = [
  { id: 'instagram', label: 'Instagram', glyph: 'IG' },
  { id: 'facebook', label: 'Facebook', glyph: 'FB' },
  { id: 'youtube', label: 'YouTube', glyph: 'YT' },
  { id: 'x', label: 'X (Twitter)', glyph: 'X' },
  { id: 'spotify', label: 'Spotify', glyph: 'SP' },
  { id: 'tiktok', label: 'TikTok', glyph: 'TT' },
  { id: 'linkedin', label: 'LinkedIn', glyph: 'IN' },
  { id: 'telegram', label: 'Telegram', glyph: 'TG' },
  { id: 'traffic', label: 'Website Traffic', glyph: 'WT' },
  { id: 'reviews', label: 'Reviews', glyph: 'RV' },
  { id: 'other', label: 'Others', glyph: 'OT' },
  { id: 'all', label: 'Everything', glyph: 'ALL' },
];

const catalog: Service[] = [
  {
    id: 10110,
    network: 'traffic',
    title: 'CoinMarketCap Followers [Refill: 30D]',
    min: 50,
    max: 1000000,
    startTime: '0 - 24 Hours',
    speed: 'Up to 50K / D',
    avgTime: '1 hour 21 minutes',
    pricePerThousand: 1.2375,
  },
  {
    id: 32140,
    network: 'instagram',
    title: 'Instagram Profile Visits [High Retention]',
    min: 100,
    max: 500000,
    startTime: '0 - 12 Hours',
    speed: 'Up to 20K / D',
    avgTime: '2 hours 8 minutes',
    pricePerThousand: 2.83,
  },
  {
    id: 42088,
    network: 'youtube',
    title: 'YouTube Likes [Global Mix]',
    min: 25,
    max: 300000,
    startTime: '0 - 6 Hours',
    speed: 'Up to 15K / D',
    avgTime: '58 minutes',
    pricePerThousand: 3.12,
  },
  {
    id: 56302,
    network: 'x',
    title: 'X Reposts [Real Profiles]',
    min: 20,
    max: 120000,
    startTime: '0 - 3 Hours',
    speed: 'Up to 9K / D',
    avgTime: '44 minutes',
    pricePerThousand: 4.44,
  },
];

const DashboardDesktop: React.FC = () => {
  const [activeNetwork, setActiveNetwork] = useState<string>('all');
  const [serviceSearch, setServiceSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<number>(catalog[0].id);
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [dripFeed, setDripFeed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const filteredServices = useMemo(() => {
    return catalog.filter((service) => {
      const networkMatch = activeNetwork === 'all' || service.network === activeNetwork;
      const query = serviceSearch.trim().toLowerCase();
      const titleMatch =
        query.length === 0 || service.title.toLowerCase().includes(query) || String(service.id).includes(query);
      return networkMatch && titleMatch;
    });
  }, [activeNetwork, serviceSearch]);

  const selectedService = useMemo(() => {
    if (filteredServices.length === 0) {
      return null;
    }
    return filteredServices.find((item) => item.id === selectedServiceId) ?? filteredServices[0];
  }, [filteredServices, selectedServiceId]);

  const listedServices = useMemo(() => {
    const query = orderSearch.trim().toLowerCase();
    return filteredServices.filter(
      (service) =>
        query.length === 0 ||
        service.title.toLowerCase().includes(query) ||
        String(service.id).includes(query),
    );
  }, [filteredServices, orderSearch]);

  const parsedQuantity = Number(quantity);
  const quantityValue = Number.isFinite(parsedQuantity) ? parsedQuantity : 0;
  const isQuantityValid =
    selectedService !== null && quantityValue >= selectedService.min && quantityValue <= selectedService.max;
  const charge =
    selectedService !== null ? Number(((quantityValue / 1000) * selectedService.pricePerThousand).toFixed(4)) : 0;

  const handleSubmitOrder = () => {
    if (!selectedService || !link.trim() || !isQuantityValid) {
      return;
    }

    setOrders((current) => [
      {
        id: Date.now(),
        service: `${selectedService.id} - ${selectedService.title}`,
        quantity: quantityValue,
        link: link.trim(),
        charge,
      },
      ...current.slice(0, 2),
    ]);

    setLink('');
    setQuantity('');
    setDripFeed(false);
  };

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-500">
      <header className="glass-card rounded-xl border-black/10 p-6 lg:p-8 blue-glow">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-black font-display">Research Operations</h1>
              <p className="text-[10px] font-mono text-black tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                Node active // monitoring workspace only
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-3 rounded-lg bg-black/[0.03] border border-black/10 min-w-[190px]">
                <p className="text-[9px] uppercase tracking-widest text-soft-slate font-mono">Welcome</p>
                <p className="text-sm text-black font-semibold">dhsinats</p>
              </div>
              <div className="px-4 py-3 rounded-lg bg-black/[0.03] border border-black/10 min-w-[190px]">
                <p className="text-[9px] uppercase tracking-widest text-soft-slate font-mono">Total Orders</p>
                <p className="text-sm text-black font-semibold">53</p>
              </div>
              <div className="px-4 py-3 rounded-lg bg-black/[0.03] border border-black/10 min-w-[190px]">
                <p className="text-[9px] uppercase tracking-widest text-soft-slate font-mono">Current Balance</p>
                <p className="text-sm text-black font-semibold">$0.095</p>
              </div>
            </div>
          </div>

          <div className="w-full xl:max-w-xl space-y-3">
            <div className="relative">
              <input
                type="search"
                value={serviceSearch}
                onChange={(event) => setServiceSearch(event.target.value)}
                placeholder="Search service catalog"
                className="w-full rounded-full bg-white/80 border border-black/15 px-5 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/40 transition-colors"
              />
            </div>
            <div className="flex justify-end gap-2">
              {['AL', 'NT', 'TG', '$', 'EX'].map((action) => (
                <button
                  key={action}
                  type="button"
                  className="h-9 min-w-9 rounded-full border border-black/15 bg-white/70 text-[10px] font-mono text-soft-slate hover:text-black hover:border-black/40 transition-colors px-3"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="glass-card rounded-xl border-black/10 overflow-hidden">
        <div className="px-5 py-4 border-b border-black/10 flex items-center justify-between">
          <h2 className="text-sm uppercase tracking-widest text-black font-display">Choose a Social Network</h2>
          <button className="text-[10px] font-mono uppercase tracking-widest text-soft-slate hover:text-black transition-colors">
            Hide Filter
          </button>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {networks.map((network) => {
            const isActive = network.id === activeNetwork;
            return (
              <button
                key={network.id}
                type="button"
                onClick={() => setActiveNetwork(network.id)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  isActive ? 'border-black/50 bg-black/10' : 'border-black/10 bg-black/[0.03] hover:border-black/20'
                }`}
              >
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-md border text-[9px] font-mono mb-3 ${
                    isActive ? 'border-black/60 text-black' : 'border-black/20 text-soft-slate'
                  }`}
                >
                  {network.glyph}
                </span>
                <p className={`text-sm font-semibold ${isActive ? 'text-black' : 'text-soft-slate'}`}>{network.label}</p>
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        <section className="col-span-12 xl:col-span-8 glass-card rounded-xl border-black/10 p-5 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button className="py-3 text-xs uppercase tracking-widest rounded-lg bg-black text-white font-semibold">
              New Order
            </button>
            <button className="py-3 text-xs uppercase tracking-widest rounded-lg bg-black/[0.03] border border-black/10 text-soft-slate">
              My Favorite
            </button>
            <button className="py-3 text-xs uppercase tracking-widest rounded-lg bg-black/[0.03] border border-black/10 text-soft-slate">
              Auto Subscription
            </button>
          </div>

          <div className="relative">
            <input
              type="search"
              value={serviceSearch}
              onChange={(event) => setServiceSearch(event.target.value)}
              placeholder="Search services by name or ID"
              className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/40 transition-colors"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="service" className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">
                Service
              </label>
              <select
                id="service"
                value={selectedService?.id ?? ''}
                onChange={(event) => setSelectedServiceId(Number(event.target.value))}
                className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black focus:outline-none focus:border-black/40 transition-colors"
              >
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.id} - {service.title}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No service available for this filter
                  </option>
                )}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="link" className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">
                Link
              </label>
              <input
                id="link"
                type="text"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                placeholder="https://example.com/profile"
                disabled={!selectedService}
                className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/40 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity" className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                placeholder={selectedService ? `${selectedService.min}` : ''}
                disabled={!selectedService}
                className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/40 transition-colors"
              />
              <p className={`text-[11px] ${quantity.length === 0 || isQuantityValid ? 'text-soft-slate' : 'text-red-500'}`}>
                {selectedService
                  ? `Min: ${selectedService.min.toLocaleString()} - Max: ${selectedService.max.toLocaleString()}`
                  : 'Choose a category with available services'}
              </p>
            </div>

            <label className="inline-flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dripFeed}
                onChange={(event) => setDripFeed(event.target.checked)}
                disabled={!selectedService}
                className="h-4 w-4 rounded border-black/20 bg-white text-black focus:ring-black/20"
              />
              <span className="text-sm text-soft-slate">Drip-feed</span>
            </label>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">Average Time</p>
              <div className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black">
                {selectedService ? selectedService.avgTime : '-'}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">Charge</p>
              <div className="w-full rounded-lg bg-white border border-black/15 px-4 py-3 text-sm text-black">
                ${charge.toFixed(4)}
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmitOrder}
              disabled={!selectedService}
              className="w-full rounded-lg py-3 bg-black text-white font-semibold uppercase tracking-wider hover:bg-black/85 transition-colors disabled:opacity-40"
            >
              Submit
            </button>
          </div>

          {orders.length > 0 && (
            <div className="pt-3 border-t border-black/10 space-y-2">
              <p className="text-[11px] uppercase tracking-widest font-mono text-soft-slate">Queued in this session</p>
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-lg border border-black/10 bg-black/[0.03] p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <p className="text-sm text-black">{order.service}</p>
                    <p className="text-[11px] text-soft-slate truncate">{order.link}</p>
                  </div>
                  <p className="text-xs font-mono text-black">
                    QTY {order.quantity.toLocaleString()} | ${order.charge.toFixed(4)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        <aside className="col-span-12 xl:col-span-4 glass-card rounded-xl border-black/10 overflow-hidden">
          <div className="px-5 py-4 border-b border-black/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-display font-semibold text-black uppercase tracking-wide">New Order</h2>
            </div>
            <input
              type="search"
              value={orderSearch}
              onChange={(event) => setOrderSearch(event.target.value)}
              placeholder="Search for your orders"
              className="w-full rounded-lg bg-white border border-black/15 px-4 py-2.5 text-sm text-black placeholder:text-black/35 focus:outline-none focus:border-black/40 transition-colors"
            />
          </div>
          <div className="p-4 space-y-3 max-h-[620px] overflow-y-auto">
            {listedServices.length > 0 ? (
              listedServices.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left rounded-lg border p-4 transition-all ${
                    selectedService?.id === service.id
                      ? 'border-black/45 bg-black/10'
                      : 'border-black/10 bg-black/[0.03] hover:border-black/20'
                  }`}
                >
                  <p className="text-black text-sm font-semibold leading-snug">
                    {service.id} - {service.title}
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] font-mono uppercase tracking-widest">
                    <div>
                      <p className="text-soft-slate/80">Start</p>
                      <p className="text-black">{service.startTime}</p>
                    </div>
                    <div>
                      <p className="text-soft-slate/80">Speed</p>
                      <p className="text-black">{service.speed}</p>
                    </div>
                    <div>
                      <p className="text-soft-slate/80">Range</p>
                      <p className="text-soft-slate">
                        {service.min.toLocaleString()} - {service.max.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-soft-slate/80">Price / 1K</p>
                      <p className="text-soft-slate">${service.pricePerThousand.toFixed(4)}</p>
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-black/15 bg-black/[0.02] py-10 px-4 text-center">
                <p className="text-sm text-soft-slate">No services match this filter.</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardDesktop;
