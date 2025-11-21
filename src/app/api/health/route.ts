/**
 * Health Check API Endpoint
 * Returns application health status and uptime information
 */

export async function GET() {
  try {
    return Response.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
    });
  } catch (error) {
    return Response.json(
      { 
        status: 'error', 
        message: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}

