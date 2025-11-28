"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Search,
  Calendar,
  ArrowRight,
  Loader2,
  X,
  Filter,
  ChevronLeft,
  ChevronRight,
  Mail,
  UserPlus,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  discoverPublicGroups,
  createJoinIntent,
  type PublicAjoGroup,
  type AjoFrequency,
  type SearchParams,
  formatFrequency,
  formatCurrency,
} from "@/lib/ajo";

const FREQUENCY_OPTIONS: { value: AjoFrequency | ""; label: string }[] = [
  { value: "", label: "All Frequencies" },
  { value: "WEEKLY", label: "Weekly" },
  { value: "BIWEEKLY", label: "Bi-Weekly" },
  { value: "MONTHLY", label: "Monthly" },
  { value: "QUARTERLY", label: "Quarterly" },
];

const CONTRIBUTION_RANGES = [
  { label: "Any Amount", min: undefined, max: undefined },
  { label: "Under ₦20,000", min: 0, max: 20000 },
  { label: "₦20,000 - ₦50,000", min: 20000, max: 50000 },
  { label: "₦50,000 - ₦100,000", min: 50000, max: 100000 },
  { label: "₦100,000+", min: 100000, max: undefined },
];

function FrequencyBadge({ frequency }: { frequency: AjoFrequency }) {
  const colors: Record<AjoFrequency, string> = {
    WEEKLY: "bg-blue-100 text-blue-800 border-blue-300",
    BIWEEKLY: "bg-purple-100 text-purple-800 border-purple-300",
    MONTHLY: "bg-green-100 text-green-800 border-green-300",
    QUARTERLY: "bg-orange-100 text-orange-800 border-orange-300",
  };

  return (
    <span className={`px-2 py-1 text-xs font-black uppercase border-2 ${colors[frequency]}`}>
      {formatFrequency(frequency)}
    </span>
  );
}

function GroupCard({
  group,
  onJoinClick,
}: {
  group: PublicAjoGroup;
  onJoinClick: (group: PublicAjoGroup) => void;
}) {
  return (
    <Card className="border-2 border-border bg-background hover:border-primary transition-all h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <FrequencyBadge frequency={group.frequency} />
            {group.isFull ? (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-black uppercase">
                FULL
              </span>
            ) : (
              <span className="px-2 py-1 bg-success/10 text-success text-xs font-black uppercase">
                {group.availableSlots} SLOTS
              </span>
            )}
          </div>

          <h3 className="text-lg font-black uppercase mb-2 line-clamp-2">{group.name}</h3>

          {group.description && (
            <p className="text-sm font-bold text-muted-foreground mb-4 line-clamp-2">
              {group.description}
            </p>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-primary/5 border-l-2 border-primary">
              <p className="text-xs font-bold text-muted-foreground uppercase">Contribution</p>
              <p className="text-base font-black">{formatCurrency(group.contributionAmount)}</p>
            </div>
            <div className="p-3 bg-muted/50 border-l-2 border-muted-foreground/30">
              <p className="text-xs font-bold text-muted-foreground uppercase">Members</p>
              <p className="text-base font-black">
                {group.memberCount}/{group.totalCycles}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 pt-0">
          <Button
            onClick={() => onJoinClick(group)}
            disabled={group.isFull}
            className="w-full font-black text-sm border-2"
            variant={group.isFull ? "outline" : "default"}
          >
            {group.isFull ? (
              "GROUP FULL"
            ) : (
              <>
                JOIN GROUP
                <UserPlus className="ml-2 h-4 w-4" strokeWidth={3} />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function JoinModal({
  group,
  onClose,
  onSuccess,
}: {
  group: PublicAjoGroup;
  onClose: () => void;
  onSuccess: (intentToken: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await createJoinIntent(group.id, email, message || undefined);
      onSuccess(result.intentToken);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create join request");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border-4 border-black max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
          <h3 className="font-black uppercase">Join {group.name}</h3>
          <button onClick={onClose} className="hover:opacity-70">
            <X className="h-5 w-5" strokeWidth={3} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-destructive/10 border-2 border-destructive flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0" strokeWidth={3} />
              <p className="text-sm font-bold text-destructive">{error}</p>
            </div>
          )}

          <div className="p-4 bg-muted/30 border-l-4 border-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-muted-foreground">Contribution</span>
              <span className="font-black">{formatCurrency(group.contributionAmount)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-muted-foreground">Frequency</span>
              <span className="font-black">{formatFrequency(group.frequency)}</span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-black uppercase mb-2">
              Your Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-2 border-border bg-background font-bold focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
            <p className="text-xs font-bold text-muted-foreground mt-1">
              You'll create an account with this email to join
            </p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-black uppercase mb-2">
              Introduction (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full p-3 border-2 border-border bg-background font-bold focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Hi, I'd like to join your Ajo group..."
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full font-black border-2">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                PROCESSING...
              </>
            ) : (
              <>
                CONTINUE TO SIGNUP
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
              </>
            )}
          </Button>

          <p className="text-xs font-bold text-muted-foreground text-center">
            After signup, your join request will be sent to the group coordinator
          </p>
        </form>
      </div>
    </div>
  );
}

function SuccessModal({
  groupName,
  intentToken,
  onClose,
}: {
  groupName: string;
  intentToken: string;
  onClose: () => void;
}) {
  const signupUrl = `https://app.nalofinance.com/register?intent=${intentToken}`;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background border-4 border-black max-w-md w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-6 text-center">
          <div className="w-16 h-16 bg-success/10 border-2 border-success flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-success" strokeWidth={3} />
          </div>

          <h3 className="text-2xl font-black uppercase mb-2">Almost There!</h3>

          <p className="text-sm font-bold text-muted-foreground mb-6">
            Complete your signup to join <span className="text-foreground">{groupName}</span>. Your
            join request will be sent automatically after registration.
          </p>

          <a href={signupUrl}>
            <Button className="w-full font-black border-2 mb-3">
              COMPLETE SIGNUP
              <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
            </Button>
          </a>

          <button
            onClick={onClose}
            className="text-sm font-bold text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  const [groups, setGroups] = useState<PublicAjoGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState<AjoFrequency | "">("");
  const [selectedRange, setSelectedRange] = useState(0);

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Modals
  const [selectedGroup, setSelectedGroup] = useState<PublicAjoGroup | null>(null);
  const [successData, setSuccessData] = useState<{
    groupName: string;
    intentToken: string;
  } | null>(null);

  const fetchGroups = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const range = CONTRIBUTION_RANGES[selectedRange];
    const params: SearchParams = {
      page,
      limit: 12,
      hasAvailableSlots: true,
    };

    if (searchQuery) params.search = searchQuery;
    if (selectedFrequency) params.frequency = selectedFrequency;
    if (range.min !== undefined) params.minContribution = range.min;
    if (range.max !== undefined) params.maxContribution = range.max;

    try {
      const result = await discoverPublicGroups(params);
      setGroups(result.groups);
      setTotalPages(result.pagination.totalPages);
      setTotal(result.pagination.total);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load groups");
    } finally {
      setIsLoading(false);
    }
  }, [page, searchQuery, selectedFrequency, selectedRange]);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchGroups();
  };

  const handleJoinClick = (group: PublicAjoGroup) => {
    setSelectedGroup(group);
  };

  const handleJoinSuccess = (intentToken: string) => {
    if (selectedGroup) {
      setSuccessData({
        groupName: selectedGroup.name,
        intentToken,
      });
      setSelectedGroup(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24 border-b-4 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/20 mb-6">
              <Search className="h-4 w-4 text-primary" strokeWidth={3} />
              <span className="text-xs font-black uppercase tracking-wide">
                Find Your Ajo Group
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none mb-6">
              Discover Public
              <br />
              <span className="text-primary">Ajo Groups</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold text-muted-foreground mb-8">
              Browse open Ajo groups and join one that matches your savings goals. All groups have
              verified coordinators and trust scores.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="flex border-2 border-border focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search groups by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 p-4 font-bold bg-background focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 bg-primary text-primary-foreground font-black uppercase"
                >
                  <Search className="h-5 w-5" strokeWidth={3} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Toggle & Stats */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-bold text-muted-foreground">
              {total} {total === 1 ? "group" : "groups"} found
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-border bg-background font-black text-sm uppercase hover:border-primary transition-colors"
            >
              <Filter className="h-4 w-4" strokeWidth={3} />
              FILTERS
              {(selectedFrequency || selectedRange > 0) && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs font-black flex items-center justify-center">
                  {(selectedFrequency ? 1 : 0) + (selectedRange > 0 ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mb-8 p-6 bg-background border-2 border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black uppercase mb-2">Frequency</label>
                  <select
                    value={selectedFrequency}
                    onChange={(e) => {
                      setSelectedFrequency(e.target.value as AjoFrequency | "");
                      setPage(1);
                    }}
                    className="w-full p-3 border-2 border-border bg-background font-bold focus:outline-none focus:border-primary"
                  >
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-black uppercase mb-2">
                    Contribution Amount
                  </label>
                  <select
                    value={selectedRange}
                    onChange={(e) => {
                      setSelectedRange(Number(e.target.value));
                      setPage(1);
                    }}
                    className="w-full p-3 border-2 border-border bg-background font-bold focus:outline-none focus:border-primary"
                  >
                    {CONTRIBUTION_RANGES.map((range, index) => (
                      <option key={index} value={index}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => {
                    setSelectedFrequency("");
                    setSelectedRange(0);
                    setSearchQuery("");
                    setPage(1);
                  }}
                  className="text-sm font-bold text-muted-foreground hover:text-foreground"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" strokeWidth={3} />
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-destructive/10 border-2 border-destructive flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">Error Loading Groups</h3>
              <p className="text-sm font-bold text-muted-foreground mb-4">{error}</p>
              <Button onClick={fetchGroups} variant="outline" className="font-black">
                TRY AGAIN
              </Button>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && groups.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-muted border-2 border-border flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-muted-foreground" strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase mb-2">No Groups Found</h3>
              <p className="text-sm font-bold text-muted-foreground mb-6">
                Try adjusting your filters or search query.
              </p>
              <Link href="https://app.nalofinance.com/register">
                <Button className="font-black border-2">
                  CREATE YOUR OWN AJO
                  <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
                </Button>
              </Link>
            </div>
          )}

          {/* Groups Grid */}
          {!isLoading && !error && groups.length > 0 && (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
                  <GroupCard key={group.id} group={group} onJoinClick={handleJoinClick} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-3 border-2 border-border bg-background font-black disabled:opacity-50 hover:border-primary transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" strokeWidth={3} />
                  </button>
                  <span className="text-sm font-black">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-3 border-2 border-border bg-background font-black disabled:opacity-50 hover:border-primary transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" strokeWidth={3} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              Start your own Ajo group and invite friends, family, or colleagues. It only takes 5
              minutes to set up!
            </p>
            <Link href="https://app.nalofinance.com/register">
              <Button
                size="lg"
                variant="outline"
                className="font-black text-base px-8 border-2 bg-white text-primary hover:bg-white/90"
              >
                CREATE YOUR AJO FREE
                <ArrowRight className="ml-2 h-5 w-5" strokeWidth={3} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Modal */}
      {selectedGroup && (
        <JoinModal
          group={selectedGroup}
          onClose={() => setSelectedGroup(null)}
          onSuccess={handleJoinSuccess}
        />
      )}

      {/* Success Modal */}
      {successData && (
        <SuccessModal
          groupName={successData.groupName}
          intentToken={successData.intentToken}
          onClose={() => setSuccessData(null)}
        />
      )}
    </>
  );
}
