import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * API Route for On-Demand Revalidation
 * 
 * Usage:
 * POST /api/revalidate
 * Body: { 
 *   secret: "your-secret-token",
 *   path?: "/specific/path",  // Optional: revalidate specific path
 *   tag?: "tag-name"          // Optional: revalidate by tag
 * }
 * 
 * Examples:
 * - Revalidate all pages: { secret: "token" }
 * - Revalidate specific path: { secret: "token", path: "/en/services/web-development" }
 * - Revalidate by tag: { secret: "token", tag: "services" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path, tag } = body;

    // Check for secret to confirm this is a valid request
    const revalidateSecret = process.env.REVALIDATE_SECRET || 'your-secret-token-here';
    
    if (secret !== revalidateSecret) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Revalidate by tag if provided
    if (tag) {
      revalidateTag(tag, 'max');
      return NextResponse.json({
        revalidated: true,
        type: 'tag',
        tag,
        now: Date.now()
      });
    }

    // Revalidate specific path if provided
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ 
        revalidated: true, 
        type: 'path',
        path,
        now: Date.now() 
      });
    }

    // Revalidate all common paths
    const pathsToRevalidate = [
      '/',
      '/en',
      '/o-nama',
      '/en/about-us',
      '/usluge',
      '/en/services',
      '/cesta-pitanja',
      '/en/faq',
      '/kontakt',
      '/en/contact',
      '/politika-privatnosti',
      '/en/privacy-policy',
    ];

    // Revalidate all service detail pages
    const services = [
      'web-development',
      'hosting',
      'performance-optimization',
      'seo-consulting',
      'migration-modernization',
      'security-compliance',
      'maintenance-support',
      'ai-integration',
      '3d-interactive',
      'website-audit',
      'b2b-consulting',
    ];

    const serviceSlugMap: Record<string, string> = {
      'web-development': 'web-razvoj',
      'hosting': 'hosting',
      'performance-optimization': 'optimizacija-performansi',
      'seo-consulting': 'seo-konzultacije',
      'migration-modernization': 'migracija-modernizacija',
      'security-compliance': 'sigurnost-uskladjenost',
      'maintenance-support': 'odrzavanje-podrska',
      'ai-integration': 'ai-integracija',
      '3d-interactive': '3d-interaktivno',
      'website-audit': 'audit-web-stranice',
      'b2b-consulting': 'b2b-konzultacije',
    };

    services.forEach(slug => {
      const hrSlug = serviceSlugMap[slug] || slug;
      pathsToRevalidate.push(`/usluge/${hrSlug}`);
      pathsToRevalidate.push(`/en/services/${slug}`);
    });

    // Revalidate all paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      type: 'all',
      count: pathsToRevalidate.length,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}

// GET method for testing
export async function GET() {
  return NextResponse.json({
    message: 'Revalidation API is active. Use POST method with secret to revalidate.',
    usage: {
      method: 'POST',
      body: {
        secret: 'your-secret-token',
        path: '/specific/path (optional)',
        tag: 'tag-name (optional)',
      },
    },
  });
}

