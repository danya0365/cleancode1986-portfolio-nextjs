/**
 * StaticHomeStatsRepository
 * Implementation of IHomeStatsRepository using static predefined data and site config
 * Following Clean Architecture - Infrastructure layer
 */

import {
  IHomeStatsRepository,
  HomeStats,
} from "@/src/application/repositories/IHomeStatsRepository";
import { PROJECTS as STATIC_PROJECTS } from "@/src/data/static/projects.static";
import { STATIC_TEAM } from "@/src/data/static/team.static";
import { SITE } from "@/src/data/master/site";

export class StaticHomeStatsRepository implements IHomeStatsRepository {
  async getStats(): Promise<HomeStats> {
    await this.delay(100);

    const currentYear = new Date().getFullYear();
    const foundedYear = SITE.company.foundedYear || 2020;
    const minYears = 5; // Default minimum experience if calculations yield less

    return {
      totalProjects: STATIC_PROJECTS.length,
      totalClients: 40, // Base fallback metric or calculated from unique testimonial clients
      yearsExperience: Math.max(currentYear - foundedYear, minYears),
      teamMembers: STATIC_TEAM.length,
    };
  }

  /**
   * Simulate network delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
