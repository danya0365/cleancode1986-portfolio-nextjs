/**
 * IHomeStatsRepository
 * Repository interface for HomeStats data access
 * Following Clean Architecture - Application layer
 */

export interface HomeStats {
  totalProjects: number;
  totalClients: number;
  yearsExperience: number;
  teamMembers: number;
}

export interface IHomeStatsRepository {
  /**
   * Get overall website statistics
   */
  getStats(): Promise<HomeStats>;
}
